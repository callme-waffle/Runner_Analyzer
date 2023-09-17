import { useState } from "react";
import { SelectionType } from "../constant";

export const useSelectionState = ( init ) => {
    const [ month, setMonth ] = useState({ year: ( init?.month?.year || -1), month: ( init?.month?.month || -1) });
    const [ name, setName ] = useState( init?.name || null );

    const dispatcher = ( type, param ) => {
        switch( type ) {
            case SelectionType.MONTH:
                return setMonth( param );
            case SelectionType.NAME:
                return setName( param );
        }
    }

    return [ { month, name }, dispatcher ];
}