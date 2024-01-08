import { APIResponse } from "../common";
import { userMockupData } from "../data/user";


/**
 * [GET] /session
 */
const sessionGET = async ( req, res ) => {
    console.log( req, res );
    if ( req.isAuthenticated() ) 
        return res.json( new APIResponse( 200, {
            result: true,
            user: req.user
        } ) );
    
    return res.json( new APIResponse( 200, { result: false } ) )
}

const getCurrentTimeText = () => {
    const d = new Date();
    return `${ d.getFullYear() }.${ d.getMonth() }.${ d.getDate() }. ${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`;
};

/**
 * [POST] /login
 */
const loginPOST = async ( req, res ) => {
    // 이미 로그인되어있는 사용자인지 확인
    if ( req.isAuthenticated() )
        return res.json( new APIResponse( 200, {
            result: false,
            reason: "이미 로그인 되어있어요",
            user: {
                name: req.user.name,
                depart: req.user.depart,
                privilege: req.user.privilege,
                uid: req.user.uid
            }
        } ) );

    const { name, pin } = req.body;
    const user = userMockupData.find( v => v.name === name && v.pin === pin );
    if ( !user )
        return res.json( new APIResponse( 200, {
            result: false,
            reason: "아이디 또는 비밀번호가 틀렸어요"
        } ) );

    res.setHeader( "Set-Cookie", `lsid=${ user.uid }; path=/; expires=${ new Date( new Date().getTime() + ( 60 * 60 * 1000 ) ) }` );

    return res.json( new APIResponse( 200, {
        result: true,
        logined: getCurrentTimeText(),
        user: {
            name: user.name,
            depart: user.depart,
            privilege: user.privilege,
            uid: user.uid
        }
    } ) );
}

/**
 * [POST] /logout
 */
const logoutPOST = async ( req, res ) => {
    res.setHeader( "Set-Cookie", `lsid=__na__; path=/; expires=${ new Date( `1970-01-01` ) }` );

    return res.json( new APIResponse( 200, {
        lgouted: getCurrentTimeText(),
    } ) );
}

export {
    sessionGET,
    loginPOST,
    logoutPOST
}