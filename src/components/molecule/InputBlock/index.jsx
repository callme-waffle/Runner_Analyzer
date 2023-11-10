import { 
    useState, useEffect,
    HTMLInputTypeAttribute,
    HTMLAttributes, HTMLDivElement, useRef
} from "react";

import * as S from "./style";

import { SERVICE_BLOCK_TYPE } from "../../atom/ServiceBlock/constant";

import util from "../../../util";

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

    const recent_input_ts = useRef();
    const [ value, setValue ] = useState( init_value || "" );

    useEffect(() => { ( async () => {
        // 연속입력 시 입력이 종료된 이후에 데이터가 한번에 전달되도록 설정
        const now_ts = new Date().getTime();
        recent_input_ts.current = now_ts;

        await util.sleep( 300 );
        if ( recent_input_ts.current !== now_ts ) return;

        if ( onValueChange ) onValueChange( value );
    } )() }, [ value ]);

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