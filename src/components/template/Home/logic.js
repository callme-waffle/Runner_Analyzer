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
    const { year, month, name } = options;
    if ( !year || !month )
        return cb( new Error("Field not fulfilled") );

    switch( options.mode ) {
        case ListContentMode.monthly: {
            const { data: api_result } = await API.get( API_URL_PARSER.SERVICE.STATISTIC({ year, month }) );
            const data = api_result?.response?.dists || [];
            // const title_data = api_result?.response?.count;
            return cb( null, { data } );
        }
        case ListContentMode.individual: {
            if ( !name ) 
                return cb( new Error("Field not fulfilled") );

            const { data: api_result } = await API.get( API_URL_PARSER.SERVICE.LOG({ year, month, name }) );
            const data = ( api_result?.response?.data || [] )
                .map( v => ({ ...v, date: new Date( v.date.str ) }) );
            const title_data = api_result?.response?.dist;
            return cb( null, { data, title_data } );
        }
        default:
            return;
    }
}