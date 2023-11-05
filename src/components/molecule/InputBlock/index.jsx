import { 
    useState, useEffect,
    HTMLInputTypeAttribute,
    HTMLAttributes, HTMLDivElement
} from "react";

import * as S from "./style";

import { SERVICE_BLOCK_TYPE } from "../../atom/ServiceBlock/constant";

/**
 * 
 * @param {{
 *  icon: TablerIconComponent,
 *  type: HTMLInputTypeAttribute,
 *  placeholder?: string,
 *  msg?: string,
 *  value?: any,
 *  onValueChange?: ( v: any ) => any
 * } & HTMLAttributes<HTMLDivElement> } param0 
 * @returns 
 */
const InputBlock = ({ 
    icon,  
    type = "text", placeholder = "", value: init_value,
    msg,
    onValueChange,
    ...props
}) => {

    const [ value, setValue ] = useState( init_value || "" );

    useEffect(() => {
        if ( onValueChange ) onValueChange( value );
    }, [ value ]);

    const onInputChange = ( e ) => {
        setValue( e.target.value );
    }

    return <S.InputBlockBox
        type={ SERVICE_BLOCK_TYPE.INPUT }
        isMobile={ true }
        { ...props }
    >
        { icon || <></> }
        <input 
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onInputChange }
        />
        { msg && <S.InputMsgText>{ msg }</S.InputMsgText> }
    </S.InputBlockBox>
}

export default InputBlock;