import { useMemo, useState, MouseEvent, useEffect, HTMLAttributes, HTMLTableSectionElement } from "react";

import * as S from "./style";
import * as ParentS from "../../organism/ListCtrlArea/sub/SearchDateSelector/style";

import { SERVICE_BLOCK_TYPE } from "../../atom/ServiceBlock/constant";

/**
 * 
 * @typedef { { text: string, value: any } } ValueType
 * @param {{
 *  icon: TablerIconComponent,
 *  children: SelectorBlock제목
 *  selections: Array<ValueType>,
 *  value?: ValueType,
 *  onValueChange?: ( key?: string, v: ValueType ) => any
 *  selector_key?: string,
 *  useParentSelection?: boolean,
 *  selAreaState?: boolean,
 *  onOpenStateToggled?: ( e: MouseEvent, state: boolean ) => any,
 * } & HTMLAttributes<HTMLTableSectionElement> } ComponentProps 
 * @returns 
 */
const SelectorBlock = ({
    icon, children,
    selections = [], value = { text: undefined, value: null }, onValueChange,
    selector_key = null,
    useParentSelection = false, selAreaState = false, onOpenStateToggled,
    onClick, ...props
}) => {
    const [ isSelectionOpen, setIsSelectionOpen ] = useState( selAreaState );
    const [ selected, setSelected ] = useState({ text: value?.text || children, value: value?.value });
    useEffect(() => { setSelected( value ) }, [ value ]);

    const onSelectorBlockBoxClicked = ( e ) => {
        if ( onOpenStateToggled ) return onOpenStateToggled( e );
        setIsSelectionOpen( p => !p );
    }

    const onSelectionClick = ( e, o ) => {
        console.log("onSelectionClick", o );
        setSelected( p => ( p.value === o.value ) ? p : o );
        if ( onValueChange ) onValueChange( selector_key, o );
        
        if ( onOpenStateToggled ) return onOpenStateToggled( e, false );
        setIsSelectionOpen( false );
    }

    const onSelectionListBoxScroll = ( e ) => {
        e.currentTarget.scrollBy( e.deltaY, 0 );
    }

    return <S.SelectorBlockArea onClick={ (e) => ( onClick && onClick( e, selector_key ) ) } { ...props }>
        <S.SelectorBlockBox
            type={ SERVICE_BLOCK_TYPE.INPUT }
            isMobile={ true }
            onClick={ onSelectorBlockBoxClicked }
        >
            <section className="log-keys-area">
                { icon || <></> }
                <span>{ selected.text }</span>
            </section>
        </S.SelectorBlockBox>
        {
            ( !useParentSelection && isSelectionOpen ) && <ParentS.SelectionListBox className="selection-list" onWheel={ onSelectionListBoxScroll }>
                <section className="selection-wrap">{
                    selections.map( sel => 
                        <div className="selection-block" onClick={ ( e ) => onSelectionClick( e, sel ) }>
                            { sel.text }
                        </div> 
                    )
                }</section>
            </ParentS.SelectionListBox>
        }
    </S.SelectorBlockArea>
}

export default SelectorBlock;