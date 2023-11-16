import API from "../../../connection";
import { API_URL_PARSER } from "../../../constants";

export const requestLogin = async ( depart, name, pin ) => {
    try {
        if ( !depart || !name || !pin ) 
            throw new Error("빠진 입력값이 있어요");

        const { data: api_result } = await API.post( API_URL_PARSER.AUTH.LOGIN(), { depart, name, pin } );
        
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
}

export const requestLogout = async () => {
    try {
        await API.post( API_URL_PARSER.AUTH.LOGOUT() );
        return { result: true };
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
}

export const getLoginStatus = async () => {
    try {
        const { data: api_result } = await API.get( API_URL_PARSER.AUTH.INFO() );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
}