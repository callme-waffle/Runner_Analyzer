import API from "../../../connection";
import { API_URL_PARSER } from "../../../constants";


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
export const getListDate = async ( options, cb ) => {
    if ( !(
        ( options.year ) &&
        ( options.month )
    ) ) return false;

    const { data } = await API.get( API_URL_PARSER.STATISTIC( options ) );
    return cb( null, data?.response?.dists );
}