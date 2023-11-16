import { useCallback, useEffect, useMemo, useState } from "react";
import * as S from "./style";

import { IconBuilding, IconLogin, IconPassword, IconUser } from "@tabler/icons-react";

import InputBlock from "../../../../molecule/InputBlock";
import ServiceButton from "../../../../atom/ServiceButton";


/**
 * 
 * @param {{
 *  isInputActive: boolean,
 *  onLoginButtonClick: ( depart: string, name: string ) => import("../../hooks/useLoginState").LoginInfo
 * }} param0 
 * @returns 
 */
const LoginInputArea = ({ isInputActive = true, onLoginButtonClick: login }) => {

    const [ data, setData ] = useState({ depart: "103sig", name: null, pin: null });
    const is_login_available = useMemo( () => 
        data.pin && data.name && isInputActive
    , [ data, isInputActive ] );

    const onInputValueChange = ( key, value ) => {
        setData( p => ({ ...p, [ key ]: value }) );
    }

    const onLoginButtonClick = useCallback( () => {
        login( data.depart, data.name, data.pin );
    }, [ data ] );

    return <S.LoginInputArea>
        <InputBlock
            className={ `login-input name-input ${ isInputActive ? "invisible" : "visible" }` }
            type="text" placeholder="사용자 이름" icon={ <IconUser/> }
            onValueChange={ ( v ) => onInputValueChange( "name", v ) }
        />
        <InputBlock
            className={ `login-input pin-input ${ isInputActive ? "invisible" : "visible" }` }
            type="password" placeholder="사용자 PIN" icon={ <IconPassword/> }
            onValueChange={ ( v ) => onInputValueChange( "pin", v ) }
        />
        <ServiceButton 
            className={ `login-button ${ is_login_available ? "visible" : "invisible" }` } 
            icon={ <IconLogin/> }
            onClick={ onLoginButtonClick }
        >로그인</ServiceButton>
    </S.LoginInputArea>
}

export default LoginInputArea;