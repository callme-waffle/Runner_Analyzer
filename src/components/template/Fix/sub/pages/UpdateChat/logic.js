import API from "../../../../../../connection";
import { API_URL_PARSER } from "../../../../../../constants";

/**
 * @typedef {{
 *  result: true,
 *  updated_at: string,
 *  device: string,
 *  version: string
 * } | { result: false, reason?: string }} UpdateInfo
 * @param { string } requester 
 * @return { UpdateInfo }
 */
export const requestChatUpdate = async ( requester ) => {
    const { data: api_result } = await API.post( API_URL_PARSER.SERVICE.LOG(), { requester } );
    return api_result.response;
}