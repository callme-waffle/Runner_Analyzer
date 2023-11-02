import { HTMLAttributes, HTMLTableSectionElement, useEffect, useState } from "react";

import * as S from "./style";

import { ListContentMode, ListContentUnit } from "./constant";

import UserBlock from "../UserBlock/index";
import LogBlock from "../LogBlock/index";

/**
 * @typedef {{
 *  [ ListContentMode.monthly ]: { name: string, dist: number },
 *  [ ListContentMode.individual ]: { date: Date, name: string, dist: number }
 * }} ListChildFormat
 */

/**
 * 
 * @param {{ 
 *  mode: ListContentMode, 
 *  children: Array<ListChildFormat[ListContentMode]>,
 *  is_ready?: boolean,
 *  title_data?: string
 * } & HTMLAttributes<HTMLTableSectionElement> } ComponentProps 
 * @returns 
 */
const BlockList = ({ mode, children = [], is_ready = true, title_data, ...props }) => {

    const [ list, setList ] = useState( children );
    useEffect(() => {
        if ( is_ready ) setList( children );
    }, [ is_ready ]);

    return <S.BlockListWrap { ...props }>
        <span className="list-title">총 { title_data || list.length }{ ListContentUnit[ mode ] }</span>
        <S.BlockList>{
            is_ready && list.map( ( v, i ) => 
                ( mode === ListContentMode.monthly ) ?
                    <UserBlock className="list-block" index={ i+1 } value={ v } key={ i }/>
                    : <LogBlock className="list-block" index={ i+1 } value={ v } key={ i }/>
            )
        }</S.BlockList>
    </S.BlockListWrap>
}

export default BlockList;