import { useEffect, useState } from "react";
import * as L from "../logic";

export const useRunLogVersion = () => {
    const [ is_ready, setIsReady ] = useState( false );
    const [ data, setData ] = useState([]);
    
    const onReqFailed = ( e ) => {
        console.error( e.message );
        setIsReady( true );
    }

    const onReqSucceed = ( e, v ) => {
        if ( e ) return onReqFailed( e );

        setData( v );
        setIsReady( true );
    };

    useEffect(() => {
        setIsReady( false );
        setData( [] );
        L.getLatestVersion( onReqSucceed );
    }, []);
    
    return [ is_ready, data ];
}