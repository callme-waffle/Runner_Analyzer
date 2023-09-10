import { useEffect, useState } from "react";
import HorizontalOptionSelector from "../HorizonOption";
import ServiceInput from "../ServiceInput";
import { ListMode, LISTMODE_OPTION_SELECTIONS } from "./constant";
import { StyledDisplayArea, StyledListArea, StyledSelectionArea } from "./style";

function DisplayArea({ data }) {

    const {
        data: { list, mode, title, month_selections },
        selection: { month, name },
        dispatch: { setMode, setSelection }
    } = useDisplayAreaState( data );

    const onOptionClick = ( mode ) => {
        setMode( mode );
    }

    const onMonthClick = ( { year, month } ) => {
        setSelection( SelectionType.MONTH, { year, month });
    }

    const onNameInput = ( v ) => {
        if ( v.length === 0 )
            return setSelection( SelectionType.NAME,  null );
        return setSelection( SelectionType.NAME,  v );
    }

    const onStatClick = ( content ) => {
        setSelection( SelectionType.NAME,  content[ 0 ] );
        setMode( ListMode.logging );
    }

    const [ list_gap, setListlist_gap ] = useState( Array.from({ length: title.length }).map( _ => `calc( 100% / 5 - 10px )` ) );
    useEffect(() => {
        setListlist_gap( 
            Array.from({ length: title.length })
            .map( _ => `calc( 100% / 5 - 10px )` ) 
        );
    }, [ title ]);

    return <StyledDisplayArea>
        <StyledSelectionArea>
        </StyledSelectionArea>
        <StyledListArea cols_gap={ list_gap }>
            <ul className="title-row">{
                    title.map( title => <li>{ title }</li> )
            }</ul>
            <section className="list-area">{
                list.map( ( content ) =>
                    <ul className="list-row">{
                        content.map( text => <li onClick={ () => onStatClick( content ) }>{ text }</li> )
                    }</ul>
                )
            }</section>
        </StyledListArea>
    </StyledDisplayArea>
}

export default DisplayArea;
