import { useContext, useEffect, useMemo, useState } from "react";
import { IconCalendar } from "@tabler/icons-react";

import * as S from "./style";

import { SearchOptionContext } from "../ListCtrlArea";

import SelectorBlock from "../../molecule/SelectorBlock/index";
import { useMonthOptionState } from "./hooks/useMonthOptionState";
import { useSelectionOpenState } from "./hooks/useSelectionOpenState";
import { SELECTOR_OPTION_KEYS, SELECTOR_UNIQUE_KEYS } from "./constant";


const SearchSelector = ({ isChlidSelectionDisabled = true }) => {
    
    const [ curr_select, setCurrSelect ] = useState( null );

    const selections = useMonthOptionState( curr_select );

    const [ _, setOptions ] = useContext( SearchOptionContext );
    const [ selected, setSelected ] = useState({
        [ SELECTOR_UNIQUE_KEYS.year ]: { key: null, text: "연도 구분", value: null },
        [ SELECTOR_UNIQUE_KEYS.month ]: { key: null, text: "월 구분", value: null }, 
    });
    useEffect(() => {
        setOptions( p => {
            const n = { ...p };
            Object.keys( selected ).forEach( key => (
                n[ SELECTOR_OPTION_KEYS[ key ] ] = selected[ key ].value
            ) );
            return n;
        } );
    }, [ selected ]);

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;

        setSelected({
            [ SELECTOR_UNIQUE_KEYS.year ]: { key: null, text: `${ year }년`, value: year },
            [ SELECTOR_UNIQUE_KEYS.month ]: { key: null, text: `${ month }월`, value: month },    
        })
    }, []);

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