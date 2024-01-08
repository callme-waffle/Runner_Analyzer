import { useEffect, useState, Dispatch, SetStateAction } from "react";

/**
 * 계정제어와 관련된 상태를 관리합니다
 * @param {[ [{}], Dispatch<SetStateAction<[{}]>> ]} param0 받아온 사용자 목록을 설
 * @returns {{
 *  states: { 
 *      btn_active: {
 *          [ keys in string ]: boolean
 *      },
 *      mode: "view" | "select" | "create",
 *      select: [{}]
 *  },
 *  logics: {
 *      setMode: Dispatch<SetStateAction<"view" | "select" | "create">>,
 *      setSelect: Dispatch<SetStateAction<{ [ keys in string ]: boolean }>>,
 *  }
 * }}
 */
export const useAccountCtrlState = () => {
    const [ btn_active, setBtnActive ] = useState({ select: true, add: true, remove: false, edit: false, adminPriv: false, loginCtrl: false });
    const [ mode, setMode ] = useState( "view" );
    const [ select, setSelect ] = useState( [] );

    useEffect(() => { setSelect([]) }, [ mode ]);

    useEffect(() => {
        if ( mode === "create" ) 
            return setBtnActive({ 
                select: false,
                add: true, remove: true, edit: false,
                adminPriv: false, loginCtrl: false
            });

        if ( select.length === 0 )
            return setBtnActive({ 
                select: true,
                add: true, remove: false, edit: false,
                adminPriv: false, loginCtrl: false
            });
            
        setBtnActive({ 
            select: true,
            add: false, remove: true, edit: true,
            adminPriv: true, loginCtrl: true
        });
    }, [ mode, select ]);

    return {
        states: { btn_active, mode, select },
        logics: { setMode, setSelect }
    }
}