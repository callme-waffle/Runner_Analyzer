import { createContext, useEffect, useState } from "react";

import * as S from "./style";
import SearchSelector from "../SearchSelector";
import { ListContentMode } from "../../molecule/BlockList/constant";
import ViewModeSelector from "../ViewModeSelector";

export const SearchOptionContext = createContext([ {}, () => {} ]);

const ListCtrlArea = ({ mode, onOptionChange }) => {

    const [ options, setOptions ] = useState({ mode: ListContentMode.monthly });
    useEffect(() => { onOptionChange( options ) }, [ options ]);

    return <S.ListCtrlArea>
        <SearchOptionContext.Provider value={[ options, setOptions ]}>
            <ViewModeSelector/>
            <SearchSelector/>
        </SearchOptionContext.Provider>
    </S.ListCtrlArea>
};

export default ListCtrlArea;