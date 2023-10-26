import { createContext, useEffect, useState } from "react";

import * as S from "./style";
import SearchSelector from "../SearchSelector";
import { ListContentMode } from "../../molecule/BlockList/constant";
import ViewModeSelector from "../ViewModeSelector";

export const SearchOptionContext = createContext([ {}, () => {} ]);

const ListCtrlArea = ({ mode, onOptionChange }) => {

    const [ option, setOption ] = useState({ mode: ListContentMode.monthly });
    useEffect(() => { onOptionChange( option ) }, [ option ]);

    useEffect(() => {
        const date = new Date();
        setOption( p => ({
            ...p,
            year: date.getFullYear(),
            month: date.getMonth()+1
        }) );
    }, []);

    return <S.ListCtrlArea>
        <SearchOptionContext.Provider value={[ option, setOption ]}>
            <ViewModeSelector/>
            <SearchSelector/>
        </SearchOptionContext.Provider>
    </S.ListCtrlArea>
};

export default ListCtrlArea;