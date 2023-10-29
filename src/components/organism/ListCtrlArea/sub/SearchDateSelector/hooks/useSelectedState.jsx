import { useContext, useEffect, useState } from "react";
import { SELECTOR_OPTION_KEYS, SELECTOR_UNIQUE_KEYS } from "../constant";
import { SearchOptionContext } from "../../../index";

/**
 * @typedef { { [ SELECTOR_UNIQUE_KEYS[ keyof SELECTOR_UNIQUE_KEYS ] ]: { keys: string | null, text: string, value: any } } } SelectedDataType
 * @returns { [
 *  SelectedDataType,
 *  ( value: SelectedDataType ) => any
 *  ] } 
 */
export const useSelectedState = () => {
    const [ _, setOptions ] = useContext( SearchOptionContext );

    const [ selected, setSelected ] = useState({
        [ SELECTOR_UNIQUE_KEYS.year ]: { key: null, text: "연도 구분", value: null },
        [ SELECTOR_UNIQUE_KEYS.month ]: { key: null, text: "월 구분", value: null }, 
    });
    useEffect(() => {
        setOptions( p => {
            const n = { ...p };
            Object.keys( selected ).forEach( key => (
                n[ SELECTOR_OPTION_KEYS[ key ] ] = selected[ key ].value
            ) );
            return n;
        } );
    }, [ selected ]);

    const init = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;

        setSelected({
            [ SELECTOR_UNIQUE_KEYS.year ]: { key: null, text: `${ year }년`, value: year },
            [ SELECTOR_UNIQUE_KEYS.month ]: { key: null, text: `${ month }월`, value: month },    
        })
    };
    useEffect( () => init(), []);

    return [ selected, setSelected ];
}