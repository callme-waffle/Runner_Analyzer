import { useEffect, useMemo, useState } from "react";

import API from "../../../../connection";
import { API_URL_PARSER } from "../../../../constants";

import { SELECTOR_UNIQUE_KEYS } from "../constant";


const getMonthSelections = async ( cb ) => {
    const { data: api_res } = await API.get( API_URL_PARSER.MONTHS() );
    cb( null, api_res?.response?.selections );
}

/**
 * 연도/월별 선택지를 조회하는 custom hook
 * @param { SELECTOR_UNIQUE_KEYS[ keyof SELECTOR_UNIQUE_KEYS ] | null } selected 가져오고자 하는 선택지 데이터
 * @returns { [ Array<number>, Array<number> ] } 선택지 데이터: SelectorBlock의 'selections' 필드 형식으로 return 합니다.
 */
export const useMonthOptionState = ( selected ) => {
    const [ year, setYr ] = useState([]);
    const [ month, setMo ] = useState([]);

    const onSelectionReceived = ( e, v ) => {
        if ( e || !v ) return; // Error handling
        const { years: sel_year, months: sel_month } = v;
        setYr( sel_year.map( v => ({ key: SELECTOR_UNIQUE_KEYS.year, text: `${v}년`, value: v }) ) );
        setMo( sel_month.map( v => ({ key: SELECTOR_UNIQUE_KEYS.month, text: `${v}월`, value: v }) ) );
        return true;
    };
    useEffect(() => { getMonthSelections( onSelectionReceived ) }, []);

    const ret_options = useMemo(() => 
        ( selected === SELECTOR_UNIQUE_KEYS.year ) ? year :
        ( selected === SELECTOR_UNIQUE_KEYS.month) ? month:
        []
    , [ year, month, selected ])

    return ret_options;
}