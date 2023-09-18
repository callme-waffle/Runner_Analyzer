import { useContext, useEffect, useState } from "react";
import { StyledListArea } from "./style";
import { useListState } from "./hooks/useListState";
import { ListModeContext, SelectionContext } from "../../index";
import { ListMode, SelectionType } from "../../constant";
import { useTableGapState } from "./hooks/useTableGapState";

function ListArea() {

    const [ mode, setMode ] = useContext( ListModeContext );
    const [ selection, setSelection ] = useContext( SelectionContext );

    const [ content_list, title_list ] = useListState( mode, selection );
    const [ list_gap ] = useTableGapState( title_list );

    const onStatClick = ( content ) => {
        setSelection( SelectionType.NAME, content[ 0 ] );
        setMode( ListMode.logging );
    }

    return <StyledListArea cols_gap={ list_gap } className="list-area">
        <ul className="title-row">{
                title_list.map( title => <li>{ title }</li> )
        }</ul>
        <section className="list-area">{
            content_list.map( ( content ) =>
                <ul className="list-row">{
                    content.map( text => <li onClick={ () => onStatClick( content ) }>{ text }</li> )
                }</ul>
            )
        }</section>
    </StyledListArea>
}

export default ListArea;
