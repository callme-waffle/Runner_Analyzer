import { HttpResponse } from "msw";
import { userMockupData } from "./data/user";

/**
 * MSW에서 응답을 처리하기 전 잠시 정보를 담아두는 객체입니다.
 * 
 * createHTTPResponse에서 전달인자로 사용되는 DTO입니다.
 */
class MSWResponse {
    constructor() {
        this.status = 200;
        this.body = {};
        this.headers = {};
    };

    setStatus( status ) {
        this.status = status;
    };

    setBody( body ) {
        this.body = body;
    };

    setHeaders( headers ) {
        this.headers = headers;
    };

    setHeader( key, value ) {
        this.headers[ key ] = value;
    };
};

/**
 * API표준응답을 제공하기위해 사용되는 객체입니다.
 */
export class APIResponse {    
    constructor( statusCode, value ) {
        this.api_version = process.env.API_VERSION;
        this.status = statusCode;
        if ( statusCode >= 400 )
            this.error = value;
        else
            this.response = value;
    }

    get getStatusCode() {
        return this.status;
    }
    set setStatusCode( code ) {
        this.status = code
        return;
    }

    get getError() {
        return this.error;
    }
    set setError( err ) {
        this.error = err
        return;
    }

    get getData() {
        return this.response;
    }
    set setData( data ) {
        this.response = data
        return;
    }

    get getVersion() {
        return this.api_version
    }
};

/**
 * 응답해야 할 정보를 컨트롤러에서 받아 실제 MSW에서 응답되도록 명령을 전달합니다
 * @param { MSWResponse } res_info 응답해야 할 정보가 담겨있는 객체입니다
 * @returns 
 */
const createHTTPResponse = ( res_info ) => {
    switch ( typeof res_info?.body ) {
        default:
            return HttpResponse.json( 
                res_info.body, 
                { 
                    status: res_info.status, 
                    headers: { 
                        "Set-Cookie": res_info?.headers["Set-Cookie"]
                    } 
                } 
            );
    }
}

/**
 * express router controller와 호환가능하도록 msw controller 함수실행 전 입력인자를 변환합니다
 * @param { any } attrs msw 인자
 * @param { Function } handler msw controller 함수
 * @returns { [ Request, Response ] } express request, response인자 배열
 */
export const convertArguments = async ( attrs, handler ) => {
    const [ msw_infos ] = attrs;
    const { request, params, cookies } = msw_infos;
    console.log( request, params, cookies );

    const req = { query: {} };
    req.url = request.url;

    if ( request.method !== "GET" )
        req.body = await request.json();

    req.params = params;
    req.cookies = cookies;

    const queryIterator = new URL( request.url ).searchParams.entries();
    for ( const [ qid, qv ] of queryIterator ) {
        req.query[ qid ] = qv;
    }

    // passport fnc handling
    req.isAuthenticated = () => {
        if ( cookies?.lsid )
            return true;

        return false;
    };

    req.user = ( () => {
        if ( req.isAuthenticated() )
            return userMockupData.find( v => v.uid === cookies?.lsid )

        return null;
    } )();
    

    // express res object
    const msw_response = new MSWResponse();
    const res = {
        status( status ) {
            msw_response.setStatus( status );
            return this;
        },
        setHeader( key, value ) {
            msw_response.setHeader( key, value );
        },
        setHeaders( headers ) {
            msw_response.setHeaders( headers );
        },
        json( data ) {
            msw_response.setBody( data );
            msw_response.setHeader( "Content-Type", "application/json" );
            return createHTTPResponse( msw_response );
        },
        end( data ) {
            msw_response.setBody( data );
            msw_response.setHeader( "Content-Type", "text/plain" );
            return createHTTPResponse( msw_response );
        }
    }

    return handler( req, res );
}

/**
 * MSW에서 설정되지 않는 API BaseURI를 설정합니다
 * @param { string } path API 접근 path
 * @returns 
 */
export const setBaseURI = ( path ) => {
    return `${ process.env.REACT_APP_API_BASEURL.slice( 0, -1 ) }${ path }`;
}