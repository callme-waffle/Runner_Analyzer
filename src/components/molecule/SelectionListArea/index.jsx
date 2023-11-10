import { HTMLAttributes, HTMLTableSectionElement } from "react";

import * as S from "./style";

/**
 * @typedef { { text: string, value: any } } SelectionObject
 * @param {{
 *  selections: Array<SelectionObject>,
 *  onSelectionClick: ( e: MouseEvent, o: SelectionObject ) => any
 * } & HTMLAttributes<HTMLTableSectionElement> } param0 
 * @returns 
 */
const SelectionListArea = ({ selections, onSelectionClick, ...props }) => {

    const onListScroll = ( e ) => {
        e.currentTarget.scrollBy( e.deltaY, 0 );
    }

    return <S.SelectionListArea 
        className={ `selection-list ${ props?.className }` }
        onWheel={ onListScroll }
        { ...props }
    >
    <section className="selection-wrap">{
        selections.map( ( sel, i ) => 
            <div className="selection-block" onClick={ ( e ) => onSelectionClick( e, sel ) } key={ i }>
                { sel.text }
            </div> 
        )
    }</section>
</S.SelectionListArea>
}

export default SelectionListArea;
