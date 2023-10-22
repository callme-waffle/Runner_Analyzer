import { useState } from "react";

import * as S from "./style";

import { SERVICE_BLOCK_TYPE } from "../../atom/ServiceBlock/constant";

/**
 * 
 * @param {{
 * icon: TablerIconComponent,
 * selections: Array<{ text: string, value: any }>
 * children: ReactElements
 * }} param0 
 * @returns 
 */
const SelectionBlock = ({
    icon, children,
    selections
}) => {

    const [ isSelectionOpen, setIsSelectionOpen ] = useState( false );
    const [ value, setValue ] = useState( "" );

    const onSelectionBlockBoxClicked = () => {
        setIsSelectionOpen( p => !p );
    }

    const onSelectionClick = ( e, v ) => {
        console.log(e, v);
    }

    const onSelectionListBoxScroll = ( e ) => {
        e.currentTarget.scrollBy( e.deltaY, 0 );
    }

    return <S.SelectionBlockArea>
        <S.SelectionBlockBox
            type={ SERVICE_BLOCK_TYPE.INPUT }
            isMobile={ true }
            onClick={ onSelectionBlockBoxClicked }
        >
            <section className="log-keys-area">
                { icon || <></> }
                <span>{ children }</span>
            </section>
        </S.SelectionBlockBox>
        {
            ( isSelectionOpen ) && <S.SelectionListBox className="selection-list" onWheel={ onSelectionListBoxScroll }>
                <section className="selection-wrap">{
                    selections.map( ({ text, value }) => 
                        <div className="selection-block" onClick={ ( e ) => onSelectionClick( e, value ) }>
                            { text }
                        </div> 
                    )
                }</section>
            </S.SelectionListBox>
        }
    </S.SelectionBlockArea>
}

export default SelectionBlock;