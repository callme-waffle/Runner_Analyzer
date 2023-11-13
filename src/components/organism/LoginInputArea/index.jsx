import { useCallback, useMemo, useState } from "react";
import * as S from "./style";

import { IconBuilding, IconLogin, IconUser } from "@tabler/icons-react";

import InputBlock from "../../molecule/InputBlock";
import ServiceButton from "../../atom/ServiceButton";


/**
 * 
 * @param {{
 *  isInputActive: boolean,
 *  onLoginButtonClick: ( depart: string, name: string ) => import("../../template/Login/hooks/useLoginRequest").LoginInfo
 * }} param0 
 * @returns 
 */
const LoginInputArea = ({ isInputActive = true, onLoginButtonClick: login }) => {

    const [ data, setData ] = useState({ depart: null, name: null });
    const is_login_available = useMemo( () => 
        data.depart && data.name && !isInputActive
    , [ data ] );

    const onInputValueChange = ( key, value ) => {
        setData( p => ({ ...p, [ key ]: value }) );
    }

    const onLoginButtonClick = useCallback( () => {
        login( data.depart, data.name );
    }, [ data ] );

    return <S.LoginInputArea>
        <InputBlock 
            className={ `login-input depart-input ${ isInputActive ? "invisible" : "visible" }` }
            type="text" placeholder="부대 식별코드" icon={ <IconBuilding/> }
            onValueChange={ ( v ) => onInputValueChange( "depart", v ) }
        />
        <InputBlock
            className={ `login-input name-input ${ isInputActive ? "invisible" : "visible" }` }
            type="text" placeholder="사용자 이름" icon={ <IconUser/> }
            onValueChange={ ( v ) => onInputValueChange( "name", v ) }
        />
        <ServiceButton 
            className={ `login-button ${ is_login_available ? "visible" : "invisible" }` } 
            icon={ <IconLogin/> }
            onClick={ onLoginButtonClick }
        >로그인</ServiceButton>
    </S.LoginInputArea>
}

export default LoginInputArea;