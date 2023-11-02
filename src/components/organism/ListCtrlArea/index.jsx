import { createContext, useEffect, useMemo, useState } from "react";

import * as S from "./style";
import { ListContentMode } from "../../molecule/BlockList/constant";

import ViewModeSelector from "../ViewModeSelector";

import SearchDateSelector from "./sub/SearchDateSelector";
import NameSearchInput from "./sub/NameSearchInput";

import { useNameSearchState } from "./hooks/useNameSearchState";

export const SearchOptionContext = createContext([ {}, () => {} ]);

const ListCtrlArea = ({ onOptionChange }) => {

    const [ options, setOptions ] = useState({ mode: ListContentMode.monthly });
    const mode = useMemo(() => options.mode, [ options ]);
    useEffect(() => { onOptionChange( options ) }, [ options ]);

    const nameSearchStyle = useNameSearchState( mode );

    return <S.ListCtrlArea mode={ mode }>
        <SearchOptionContext.Provider value={[ options, setOptions ]}>
            <ViewModeSelector/>
            { <NameSearchInput style={ nameSearchStyle }/> }
            <SearchDateSelector/>
        </SearchOptionContext.Provider>
    </S.ListCtrlArea>
};

export default ListCtrlArea;