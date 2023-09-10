import { useEffect, useState } from "react";
import { parseUserRunLog } from "./logic";

export const useDBState = () => {

    const[ data, setData ] = useState({ months: {}, logs: {} });

    // useEffect(() => {
    //     console.log( "data", data );
    // }, [ data ]);

    const onValueChanged = ( text ) => {
        const user_logs = parseUserRunLog( text );
        setData( user_logs );
    }

    return {
        value: { data },
        handlers: { onValueChanged }
    }
}