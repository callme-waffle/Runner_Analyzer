import { useEffect, useState } from "react";

import * as L from "../logic";

/**
 * API가 응답한 list_data의 로딩상태 및 실제 데이터 상태관리 hook
 * @param {{ mode: string, year?: number, month?: number }} options list_data를 가져오기 위해 필요한 options
 * @returns {[
 *  boolean,
 *  Array<any>
 * ]} [ list_data의 준비여부, API가 응답한 list_data ]
 */
export const useListDataState = ( options ) => {
    const [ is_ready, setIsReady ] = useState( false );
    const [ data, setData ] = useState([]);
    const [ title, setTitle ] = useState("");

    const onReqSucceed = ( e, v ) => {
        if ( e ) return onReqFailed( e );

        const { data, title_data } = v;
        setTitle( title_data )
        setData( data );
        setIsReady( true );
    };
    
    const onReqFailed = ( e ) => {
        // console.error( e.message );
        setIsReady( true );
    }

    useEffect(() => {
        setIsReady( false );
        setData( [] );
        L.getListData( options, onReqSucceed, onReqFailed );
    }, [ options ]);

    return [ is_ready, data, title ];
}