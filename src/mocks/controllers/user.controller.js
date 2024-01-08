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
 * [GET] /list
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
};

/**
 * [GET] /info
 */
const userInfoGET = async ( req, res ) => {
    const { uid } = req.query;

    if ( !req.isAuthenticated() )
        return res.status( 403 ).json( new APIResponse( 403, { 
            result: false, 
            reason: "로그인이 되어있지 않아요" 
        } ) );
    
    return res.json( new APIResponse( 200, {
        result: true,
        user: userMockupData.find( v => v.uid === uid )
    } ) );
};

/**
 * [POST] /join
 */
const userJoinPOST = async ( req, res ) => {
    if ( !req.isAuthenticated() )
        return res.status( 403 ).json( new APIResponse( 403, { 
            result: false, 
            reason: "로그인이 되어있지 않아요" 
        } ) );

    const { name, expired_at } = req.body;
    const [ exp_y, exp_m, exp_d ] = expired_at.split(".");

    const created_user = {
        uid: `UID_TEST_${ userMockupData.length }`,
        name, 
        depart: "000정보통신단",
        privilege: 0,
        active: true,
        expired_at: new Date(`${ exp_y }-${ exp_m }-${ exp_d }`).getTime(),
        requester: req.user.uid,
        joined: "2023.11.14 01:38:00",
        pin: `${ exp_y.slice(2) }${ exp_m }${ exp_d }`,
    };
    userMockupData.push( created_user );
    
    return res.status( 200 ).json( new APIResponse( 200, { 
        result: true, 
        user: created_user,
        requested: req.user
    } ) );
};

export {
    userListGET,
    userInfoGET,
    userJoinPOST
}