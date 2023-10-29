import { useEffect, useState } from "react";

/**
 * 여러 Selector의 open state를 일원화하여 관리합니다. 1번에 1개의 selector만 열립니다.
 * @param  { Array<string> } keys Selector별 고유한 key값
 * @returns {
 *  states: { [ key in keys ]: boolean },
 *  onOpen: ( key ) => void
 * } 각 Selector의 openState와 특정 selector가 열렸을 때 호출되야하는 event handler 입니다.
 */
export const useSelectionOpenState = ( keys = [] ) => {
    const [ states, dispatch ] = useState( 
        keys.map( key => ({ [ key ]: false }) )
        .reduce( (a, b) => ({ ...a, ...b }), {} )
    );
    const setSelection = ( key, state ) => {
        dispatch( p => {
            const u = {};
            Object.keys( p ).forEach( k => 
                ( u[k] = 
                    ( ( k === key ) && ( 
                        ( state === undefined ) ? !p[k] : state 
                    ) ) 
                ) 
            )
            return u;
        } );
        return true;
    }

    const onOpen = ( key, state ) => {
        setSelection( key, state );
    }
    return { states, onOpen };
}