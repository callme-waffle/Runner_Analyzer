import { useEffect, useState } from "react";
import { ListContentMode } from "../../../molecule/BlockList/constant";

/**
 * 
 * @param { ListContentMode[ keyof ListContentMode ] } mode 현재 options로 지정되어있는 mode
 * @returns NameSearchInput에 적용하는 props 객체
 */

const NameSearchStyle = {
    default: {
        padding: 0,
        opacity: 0,
        height: 0
    },
    [ ListContentMode.individual ]: {
        opacity: 1
    }
}

export const useNameSearchState = ( mode ) => {
    const [ styles, setStyle ] = useState({});
    useEffect(() => {
        setStyle( NameSearchStyle[ mode ] || NameSearchStyle.default );
    }, [ mode ]);

    return styles;
}