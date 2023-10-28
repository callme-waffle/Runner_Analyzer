import API from "../../../connection";
import { API_URL_PARSER } from "../../../constants";
import { ListContentMode } from "../../molecule/BlockList/constant";


/**
 * @typedef {{
 *  name?: string,
 *  year: number,
 *  month: number,
 *  mode: ListContentMode
* }} search_opt
 */

/**
 * 
 * @param { search_opt } options 
 * @param { ( v: search_opt ) => any } cb
 */
export const getListData = async ( options, cb ) => {
    if ( !(
        ( options.year ) &&
        ( options.month )
    ) ) return false;

    switch( options.mode ) {
        case ListContentMode.monthly: {
            const { data: api_result } = await API.get( API_URL_PARSER.STATISTIC( options ) );
            const data = api_result?.response?.dists || [];
            return cb( null, data );
        }
        case ListContentMode.individual: {
            const { data: api_result } = await API.get( API_URL_PARSER.LOG( options ) );
            console.log( "api_result", api_result );
            const data = api_result?.response?.dists || [];
            return cb( null, data );
        }
        default:
            return;
    }
}