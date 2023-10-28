import { useContext, useEffect, useMemo, useState } from "react";
import { IconCalendar } from "@tabler/icons-react";

import * as S from "./style";

import { SearchOptionContext } from "../ListCtrlArea";

import SelectorBlock from "../../molecule/SelectorBlock/index";
import { useMonthOptionState } from "./hooks/useMonthOptionState";
import { useSelectionOpenState } from "./hooks/useSelectionOpenState";
import { SELECTOR_UNIQUE_KEYS } from "./constant";
import { useSelectedState } from "./hooks/useSelectedState";


const SearchSelector = ({ isChlidSelectionDisabled = true }) => {
    
    const [ curr_select, setCurrSelect ] = useState( null );
    const selections = useMonthOptionState( curr_select );
    
    const [ selected, setSelected ] = useSelectedState();

    const { states, onOpen } = useSelectionOpenState( [ SELECTOR_UNIQUE_KEYS.year, SELECTOR_UNIQUE_KEYS.month ] );
    const isSelectionOpen = useMemo(() => Object.values( states ).includes(true), [ states ]);

    const onSelectorBlockClick = ( e, key ) => {
        setCurrSelect( key );
        onOpen( key );
    }

    const onSelectionClick = ( e, o ) => {
        setSelected( p => ({ ...p, [ o.key ]: o }) );
        onOpen( o.key );
    }

    const onSelectionListBoxScroll = ( e ) => {
        e.currentTarget.scrollBy( e.deltaY, 0 );
    }

    return <S.SelectorWrap>
        <S.SelectorBlocksWrap>
            <SelectorBlock
                icon={ <IconCalendar/> }
                value={ selected[ SELECTOR_UNIQUE_KEYS.year ] || {} }

                selector_key={ SELECTOR_UNIQUE_KEYS.year }
                useParentSelection={ isChlidSelectionDisabled }
                onClick={ onSelectorBlockClick }
            >{ selected[ SELECTOR_UNIQUE_KEYS.year ].text }</SelectorBlock>
            <SelectorBlock
                icon={ <IconCalendar/> }
                value={ selected[ SELECTOR_UNIQUE_KEYS.month ] || {} }

                selector_key={ SELECTOR_UNIQUE_KEYS.month }
                useParentSelection={ isChlidSelectionDisabled }
                onClick={ onSelectorBlockClick }
            >{ selected[ SELECTOR_UNIQUE_KEYS.month ].text }</SelectorBlock>
        </S.SelectorBlocksWrap>
        {
            ( isChlidSelectionDisabled && isSelectionOpen ) && <S.SelectionListBox className="selection-list" onWheel={ onSelectionListBoxScroll }>
                <section className="selection-wrap">{
                    selections.map( ( sel, i ) => 
                        <div className="selection-block" onClick={ ( e ) => onSelectionClick( e, sel ) } key={ i }>
                            { sel.text }
                        </div> 
                    )
                }</section>
            </S.SelectionListBox>
        }
    </S.SelectorWrap>
}

export default SearchSelector;