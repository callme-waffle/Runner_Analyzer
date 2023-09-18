import { useCallback, useEffect, useState } from "react";
import { isValuesSame } from "./logic";
import { StyledHorizontalOptionSelector } from "./style";

const SELECTION_DEFAULT = { data: undefined, text: "[선택값 없음]" };

function HorizontalOptionSelector({ children, value = SELECTION_DEFAULT.data, onOptionClick, ...props }) {

    const [ is_open, setIsOpen ] = useState( true );
    const [ selection, setSelection ] = useState( SELECTION_DEFAULT );

    const onHorOptionClick = useCallback( ( e, data ) => {
        if ( !is_open ) {
            setIsOpen( true );
            setSelection( SELECTION_DEFAULT );
            return onOptionClick( SELECTION_DEFAULT.data );
        }

        // onOptionClick이 있을 경우, 부모 컴포넌트에서 값이 update된 이후 값 설정
        if ( onOptionClick ) 
            return onOptionClick( data );
        
        setIsOpen( false );
        setSelection( children.find( v => ( v.data === data ) ) );
    }, [ children, is_open ] );

    useEffect(() => { // 부모 컴포넌트에서 값이 update되어 전파되었을 때, 이후과정 실행
        const selected = children.find( v => isValuesSame( v.data, value ) );
        setSelection( selected || SELECTION_DEFAULT );
        setIsOpen( selected ? false : true );
    }, [ value ]);

    return <StyledHorizontalOptionSelector { ...props }>{
        children.map( ({ data, text }) => 
            <div 
                className={ 
                    `hor-option
                    ${ ( !is_open ) ? " closed" : "" }
                    ${ isValuesSame( selection.data, data ) ? " selected" : "" }
                ` } 
                onClick={ ( e ) => onHorOptionClick( e, data ) }
            >
                <span>{ text }</span>
            </div>
        )   
    }</StyledHorizontalOptionSelector>
}

export default HorizontalOptionSelector;