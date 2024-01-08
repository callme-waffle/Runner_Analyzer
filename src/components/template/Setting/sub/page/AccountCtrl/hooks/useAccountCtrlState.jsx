import { useEffect, useState, Dispatch, SetStateAction } from "react";

import * as C from "../constant";

/**
 * 
 * @returns { {
 *  data: {
 *      mode: ValueOf<C.ACC_CTRL_MODES>,
 *      user_select: UserId[]
 *  },
 *  hooks: {
 *      setMode: Dispatch<SetStateAction<UserId[]>>
 *  }
 * } }
 */
export const useAccountCtrlState = (  ) => {

    const [ mode, setMode ] = useState( C.ACC_CTRL_MODES.SELECT );
    const [ select, setSelect ] = useState( [] );

    useEffect(() => {
        setSelect([]);
    }, [ mode ]);
    
    return {
        data: { mode, user_select: select },
        hooks: { setMode }
    }
};