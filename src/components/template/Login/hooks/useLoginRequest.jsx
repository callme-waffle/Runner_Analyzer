import { useState } from "react";

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
 * @returns { [ boolean, boolean, LoginInfo, ( depart: string, name: string ) => Promise<LoginInfo> ] }
 */
export const useLoginRequest = () => {

    const [ is_logined, setIsLogined ] = useState( false );
    const [ is_requested, setIsRequested ] = useState( false );
    const [ info, setInfo ] = useState({ result: false, reason: "아직 로그인을 시도하지 않았아요" });
    
    const login = async ( depart, name ) => {
        console.log( depart, name, /[^A-Za-z가-힣0-9]/.test( depart ), /[^가-힣]/.test( name ) );
        if ( 
            !depart || !name || 
            /[^A-Za-z가-힣0-9]/.test( depart ) || /[^가-힣]/.test( name )
        ) return { result: false, reason: "값이 정상적으로 입력되지 않았어요" };

        return await L.requestLogin( depart, name );
    }

    return [ is_logined, is_requested, info, login ];
}