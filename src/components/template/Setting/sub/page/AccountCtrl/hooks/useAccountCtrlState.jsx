import { useEffect, useState, Dispatch, SetStateAction, useCallback } from "react";

import * as C from "../constant";
import * as R from "../request";

Array.prototype.toggle = function( element ) {
    if ( this.includes( element ) )
        return this.filter( v => v !== element );

    return [ ...this, element ];
}

/**
 * @typedef { T[ keyof T ] } ValueOf<T>
*/

/**
 * 
 * @returns { {
 *  data: {
 *      mode: ValueOf<C.ACC_CTRL_MODES>,
 *      user_select: UserId[]
 *  },
 *  hooks: {
 *      updateMode: ( type: "toggle" | "default", value: ValueOf<C.ACC_CTRL_MODES> ) => void
 *  }
 * } }
 */
export const useAccountCtrlState = (  ) => {

    const [ mode, setMode ] = useState( C.ACC_CTRL_MODES.VIEW );
    const [ select, setSelect ] = useState( [] );    

    const onUserblockClick = useCallback( ( e, uid ) => {
        if ( mode === C.ACC_CTRL_MODES.SELECT )
            setSelect( select.toggle( uid ) );
        else if ( select[0] === uid )
            setSelect( [] );
        else
            setSelect( [ uid ] );
    }, [ select, mode ] );

    const updateMode = ( type, value ) => {
        console.log( type, value );
        switch( type ) {
            case "toggle":
                setMode( v => v === value[0] ? value[1] : value[0] );
                break;
            case "default":
            default:
                setMode( value );
        }
        return;
    }

    useEffect(() => {
        console.log( "mode: ", mode );
        setSelect([]);
    }, [ mode ]);
    
    return {
        data: { mode, user_select: select },
        hooks: { updateMode, onUserblockClick }
    }
};