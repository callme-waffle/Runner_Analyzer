import { useRef, useState } from "react";
import { StyledServiceInput } from "./style";
import { sleep } from "./logic";

const INPUT_AWAIT_TMOUT = 1 * 1000;

function ServiceInput({ onInput, value: parentValue, ...props }) {

    const [ value, setValue ] = useState( parentValue );
    const last_input = useRef( new Date().getTime() );

    const onChange = async ( e ) => {
        const { currentTarget: element } = e;
        const { value } = element;
        setValue( value );

        last_input.current = new Date().getTime();
        await sleep( INPUT_AWAIT_TMOUT );

        if ( value.length === 0 ) return;
        if ( element.value === value )
            if ( onInput ) onInput( value );
    }

    const onFocusOut = ( e ) => {
        const { value } = e.currentTarget;
        if ( onInput ) onInput( value );
    }

    return <StyledServiceInput { ...props }>
        <input type="text" value={ value } 
            onChange={ onChange }
            onBlur={ onFocusOut }
        />
    </StyledServiceInput>
}

export default ServiceInput;
