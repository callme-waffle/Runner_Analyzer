import { useContext, useEffect } from "react";
import { IconCalendar } from "@tabler/icons-react";

import * as S from "./style";

import { SearchOptionContext } from "../ListCtrlArea";

import SelectionBlock from "../../molecule/SelectionBlock";
import { SELECTOR_UNIQUE_KEYS } from "./constant";



const SearchSelector = (  ) => {
    const [ options, setOptions ] = useContext( SearchOptionContext );
    return <S.SelectorWrap>
        <SelectionBlock
            icon={ <IconCalendar/> }
        >연도 구분</SelectionBlock>
        <SelectionBlock
            icon={ <IconCalendar/> }
        >월 구분</SelectionBlock>
    </S.SelectorWrap>
export default SearchSelector;