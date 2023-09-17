import { useEffect, useState } from "react";

export const useTableGapState = ( title_list ) => {
    const [ list_gap, setListlist_gap ] = useState( Array.from({ length: title_list.length }).map( _ => `calc( 100% / 5 - 10px )` ) );
    useEffect(() => {
        setListlist_gap( 
            Array.from({ length: title_list.length })
            .map( _ => `calc( 100% / 5 - 10px )` ) 
        );
    }, [ title_list ]);

    return [ list_gap ];
}