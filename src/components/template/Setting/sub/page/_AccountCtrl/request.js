import API from "../../../../../../connection";
import { API_URL_PARSER } from "../../../../../../constants";

export const getUserList = async ( name ) => {
    try {
        const { data: api_result } = await API.get( API_URL_PARSER.USER.LIST({ search: name }) );
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

export const joinUser = async ( name, expired_at ) => {
    try {
        const { data: api_result } = await API.post( API_URL_PARSER.USER.JOIN(), { name, expired_at } );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.error?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
}