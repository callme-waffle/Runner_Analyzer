import { useEffect, useState } from "react";

import * as L from "../logic";

/**
 * 
 * @returns {[
 *  boolean,
 *  Array<any>
 * ]} [ list_data의 준비여부, API가 응답한 list_data ]
 */
export const useListDataState = () => {
    const [ is_ready, setIsReady ] = useState( false );
    const [ data, setData ] = useState([]);

    const onDataReceived = ( e, v ) => {
        setData( v );
        setIsReady( true );
    };

    useEffect(() => {
        L.getListData( options, onDataReceived );
    }, [ options ]);

    return [ is_ready, data ];
}