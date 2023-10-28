import { useContext, useEffect, useMemo, useState } from "react";

import * as S from "./style";

import { ListContentMode } from "../../molecule/BlockList/constant"
import ViewModeSelectorBlock from "../../molecule/ViewModeSelectorBlock";
import { SearchOptionContext } from "../ListCtrlArea";

const ViewModeSelector = () => {
    
    const [ options, setOptions ] = useContext( SearchOptionContext );
    const selected = useMemo(() => options?.mode || ListContentMode.monthly, [ options ]);

    const onBlockClick = ( mode ) => {
        setOptions( p => ({ ...p, mode }) );
    }

    return <S.SelectorWrap>
        {
            Object.values( ListContentMode ).map( mode =>
                <ViewModeSelectorBlock 
                    mode={ mode } 
                    isSelected={ selected === mode }
                    onClick={ () => onBlockClick( mode ) }
                />
            )
        }
    </S.SelectorWrap>
}

export default ViewModeSelector;