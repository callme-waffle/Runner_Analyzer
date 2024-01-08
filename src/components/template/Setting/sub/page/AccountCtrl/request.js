import API from "../../../../../../connection";
import { API_URL_PARSER } from "../../../../../../constants";

/**
 * 조건에 맞는 사용자목록을 불러옵니다
 * @param { Partial<User> } filter 
 * @param { Number? } page 
 * @param { Number? } perpage 
 * @returns { { result: true, list: User[] } | { result: false, reason?: string } }
 */
export const getUserList = async ( filter, page, perpage ) => {
    try {
        const { data: api_result } = await API.get( API_URL_PARSER.USER.LIST({ search: filter, page, perpage }) );
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

/**
 * 입력받은 사용자정보로 계정을 생성합니다
 * @param { string } name 신규등록할 사용자 이름
 * @param { string } expired_at 신규계정의 만료일; 신규등록자의 전역일로 설정하며, 'YYYY.MM.DD'형식의 입력만 정상처리됨
 * @returns { { result: true, user: User, requested: User } | { result: false, reason?: string } }
 */
export const addUser = async ( name, expired_at ) => {
    console.log( "addUser", name, expired_at );
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
};

/**
 * 특정 사용자의 정보를 업데이트합니다
 * @param { UserID } uid 사용자마다 부여되는 고유ID
 * @param { { [ keys in string ]: string } } update 수정하고자하는 정보만 담겨있는 객체
 * @returns { { result: true, user: User, requested: User } | { result: false, reason?: string } }
 */
export const updateUser = async ( uid, update ) => {
    try {
        const { data: api_result } = await API.patch( API_URL_PARSER.USER.EDIT(), { uid, update } );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.error?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
};

/**
 * 특정 사용자계정을 삭제합니다
 * @param { UserID } uid 사용자마다 부여되는 고유ID
 */
export const removeUser = async ( uid ) => {
    try {
        const { data: api_result } = await API.delete( API_URL_PARSER.USER.REMOVE(), { uid } );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.error?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
};

/**
 * 특정 사용자계정의 권한을 1계급 상향시킵니다
 * @param { UserID } uid 사용자마다 부여되는 고유ID
 * @returns 
 */
export const updateUserPriv = async ( uid ) => {
    try {
        const { data: api_result } = await API.post( API_URL_PARSER.USER.PRIV(), { uid } );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.error?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
};

/**
 * 특정 사용자계정의 로그인을 차단합니다
 * @param { UserID } uid 사용자마다 부여되는 고유ID
 * @returns 
 */
export const blockUser = async ( uid ) => {
    try {
        const { data: api_result } = await API.post( API_URL_PARSER.USER.BLOCK(), { uid } );
        return { result: true, ...api_result?.response }
    } catch(e) {
        if ( e.response )
            return { result: false, reason: e.response.data?.error?.reason || "알 수 없는 오류가 발생했어요" };

        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
};