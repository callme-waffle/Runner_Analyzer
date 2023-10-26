import { useEffect, useState } from "react";

import * as S from "./style";

import { ListContentMode } from "../../molecule/BlockList/constant"
import ViewModeSelectorBlock from "../../molecule/ViewModeSelectorBlock";

const ViewModeSelector = () => {
    
    const [ selected, setSelected ] = useState( ListContentMode.monthly );

    const onBlockClick = ( mode ) => {
        setSelected( mode );
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