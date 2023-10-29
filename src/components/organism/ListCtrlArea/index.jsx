import { createContext, useEffect, useState } from "react";

import * as S from "./style";
import { ListContentMode } from "../../molecule/BlockList/constant";

import ViewModeSelector from "../ViewModeSelector";

import SearchDateSelector from "./sub/SearchDateSelector";
import NameSearchInput from "./sub/NameSearchInput";

export const SearchOptionContext = createContext([ {}, () => {} ]);

const ListCtrlArea = ({ onOptionChange }) => {

    const [ options, setOptions ] = useState({ mode: ListContentMode.monthly });

    useEffect(() => { onOptionChange( options ) }, [ options ]);

    return <S.ListCtrlArea>
        <SearchOptionContext.Provider value={[ options, setOptions ]}>
            <ViewModeSelector/>
            <SearchDateSelector/>
        </SearchOptionContext.Provider>
    </S.ListCtrlArea>
};

export default ListCtrlArea;