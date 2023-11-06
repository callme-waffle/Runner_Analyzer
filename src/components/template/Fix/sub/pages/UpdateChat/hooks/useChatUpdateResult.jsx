import { useState } from "react";

import * as L from "../logic";

/**
 * @returns { [ { requested: boolean }, () => boolean ] }
 */

export const useChatUpdateResult = () => {
    
    const [ result, setResult ] = useState({ requested: false });
    
    const requestUpdate = async ( name ) => {
        try {
            const update_result = await L.requestChatUpdate( name );
            if ( !update_result.result )
                throw new Error( update_result.reason || "알 수 없는 오류" );

            setResult({
                requested: true,
                ...update_result
            });
            return true;
        } catch(e) {
            setResult({
                requested: true,
                result: false,
                reason: e.message || "Unknown Error"
            })
            return false;
        }
    };

    return [ result, requestUpdate ];
}