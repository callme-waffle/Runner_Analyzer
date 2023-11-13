import API from "../../../connection";
import { API_URL_PARSER } from "../../../constants";

export const getLatestVersion = async ( cb ) => {
    try {
        const { data: api_result } = await API.get( API_URL_PARSER.SERVICE.VERSION() );
        console.log(api_result);
        cb( null, api_result?.response?.info );
    } catch(e) {
        return cb(e);
    }
}