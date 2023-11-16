import { useEffect, useState } from "react";

import * as L from "../logic";

/**
 * @typedef { {
 *  result: true,
 *  depart: string,
 *  name: string,
 *  priv: number
 * } | {
 *  result: false,
 *  reason?: string
 * } } LoginInfo
 * @returns { {
 *  status: {
 *      is_logined: boolean,
 *      is_requested: boolean,
 *  },
 *  data: {
 *      user: UserInfo,
 *      logined: string
 *  },
 *  fnc: {
 *      login: ( depart: string, name: string ) => Promise<LoginInfo>,
 *      logout: () => Promise<boolean>
 *  }
 * } }
 */
export const useLoginState = () => {

    const [ is_logined, setIsLogined ] = useState( false );
    const [ is_requested, setIsRequested ] = useState( false );
    const [ active_input, setActiveInput ] = useState( true );
    const [ info, setInfo ] = useState({});

    const init = async () => {
        const login_status = await L.getLoginStatus();

        if ( !login_status.result ) {
            setIsLogined( false );
            return false;
        }

        setIsLogined( true );
        setInfo( login_status );
        return true;
    }
    
    const login = async ( depart, name, pin ) => {
        if ( 
            !depart || !name || !pin ||
            /[^A-Za-z가-힣0-9]/.test( depart ) || /[^가-힣]/.test( name ) || !(/^[0-9]{6}$/.test( pin ))
        ) return { result: false, reason: "값이 정상적으로 입력되지 않았어요" };

        setActiveInput( false );
        const login_result = await L.requestLogin( depart, name, pin );
        if ( !login_result.result ) {
            setIsRequested( true );
            setIsLogined( false );
            setInfo({ result: false, reason: login_result.reason || "알 수 없는 오류가 발생했어요" });
            setActiveInput( true );
            return false;
        }

        setIsRequested( true );
        setIsLogined( true );
        setInfo( login_result );
        
        return true;
    }

    const logout = async () => {
        try {
            await L.requestLogout();
            window.location.reload();
            return true;
        } catch(e) {
            console.error(e);
            return false;
        }
    }

    useEffect(() => {
        init();
        setActiveInput( true );
    }, []);

    return {
        status: { is_logined, is_requested, active_input },
        data: info,
        fnc: { login, logout }
    };
}