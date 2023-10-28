import { HTMLAttributes, HTMLTableSectionElement } from "react";

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
 *  children: Array<ListChildFormat[ListContentMode]>
 * } & HTMLAttributes<HTMLTableSectionElement> } ComponentProps 
 * @returns 
 */
const BlockList = ({ mode, children = [], ...props }) => {
    return <S.BlockListWrap { ...props }>
        <span className="list-title">총 { children.length }{ ListContentUnit[ mode ] }</span>
        <S.BlockList>{
            children.map( ( v, i ) => 
                ( mode === ListContentMode.monthly ) ?
                    <UserBlock className="list-block" index={ i+1 } value={ v }/>
                    : <LogBlock className="list-block" index={ i+1 } value={ v }/>
            )
        }</S.BlockList>
    </S.BlockListWrap>
}

export default BlockList;