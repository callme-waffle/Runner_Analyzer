import API from "../../../connection";
import { API_URL_PARSER } from "../../../constants";

export const requestLogin = async ( depart, name ) => {
    console.log("requestLogin", depart, name);
    try {
        if ( !depart || !name ) 
            throw new Error("빠진 입력값이 있어요");

        const { data: api_result } = await API.post( API_URL_PARSER.AUTH.LOGIN(), { depart, name } );
        
        return {
            result: true,
            ...api_result?.response
        }
    } catch(e) {
        // if ( !e.message ) 
            console.error(e);
        return {
            result: false,
            reason: e.message || "알 수 없는 오류가 발생했어요"
        }
    }
}