import { APIResponse } from "../common";
import { userMockupData } from "../data/user";

const parseSearchQuery = ( str ) => {
    if ( str.length === 0 ) return {};
    
    const parsed = {};

    str.split("&")
    .forEach( f => {
       const [ k, v ] = f.split("=");
       parsed[ k ] = v;
    });

    return parsed;
}

/**
 * [GET] /session
 */
const userListGET = async ( req, res ) => {
    const { search = "", page = 1, perpage = 10 } = req.query;
    const search_query = parseSearchQuery( search );
    console.log( search_query, page, perpage );

    if ( page < 1 || perpage < 1 ) 
        throw new Error("잘못된 요청입니다");
    if ( !req.isAuthenticated() )
        return res.status( 403 ).json( new APIResponse( 403, { 
            result: false, 
            reason: "로그인이 되어있지 않아요" 
        } ) );
    if ( req.user.privilege < 1 )
        throw new Error("권한이 없는 사용자입니다");

    console.log( userMockupData );
    
    return res.json( new APIResponse( 200, {
        result: true,
        list: userMockupData
            .filter( d =>
                Object.keys( search_query )
                .map( k => d[k].includes( search[k] ) )
                .reduce( (a, b) => a && b, true )
            )
            .map( v => {
                delete v.pin;
                return v;
            } )
            .slice( perpage * ( page-1 ), perpage * page )
    } ) );
}

export {
    userListGET
}