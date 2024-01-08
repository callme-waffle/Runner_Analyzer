import { useCallback, useContext, useEffect, useState } from "react";

import * as C from "../constant";

/**
 * @typedef { T[ keyof T ] } ValueOf<T>
*/

const { SELECT, ADD, REMOVE, EDIT, ASSIGN_ADMIN_PRIV, BLOCK_LOGIN } = C.CTRL_BUTTON_IDS;

const BTN_INIT_STATE = { 
    [ SELECT ]: true,
    [ ADD ]: true, [ REMOVE ]: false, [ EDIT ]: false,
    [ ASSIGN_ADMIN_PRIV ]: false, [ BLOCK_LOGIN ]: false
};

const updateBtnState = ( mode, select, setBtn ) => {
    console.log( "updateBtnState", mode, select );
    if ( mode === C.ACC_CTRL_MODES.CREATE ) 
        return setBtn({ 
            [ SELECT ]: false,
            [ ADD ]: true, [ REMOVE ]: true, [ EDIT ]: false,
            [ ASSIGN_ADMIN_PRIV ]: false, [ BLOCK_LOGIN ]: false
        });

    if ( mode === C.ACC_CTRL_MODES.EDIT )
        return setBtn({ 
            [ SELECT ]: false,
            [ ADD ]: false, [ REMOVE ]: true, [ EDIT ]: true,
            [ ASSIGN_ADMIN_PRIV ]: false, [ BLOCK_LOGIN ]: false
        });

    if ( mode === C.ACC_CTRL_MODES.SELECT && select.length !== 0 )
        return setBtn({ 
            [ SELECT ]: true,
            [ ADD ]: false, [ REMOVE ]: true, [ EDIT ]: false,
            [ ASSIGN_ADMIN_PRIV ]: true, [ BLOCK_LOGIN ]: true
        });

    if ( select.length === 0 )
        return setBtn({ 
            [ SELECT ]: true,
            [ ADD ]: true, [ REMOVE ]: false, [ EDIT ]: false,
            [ ASSIGN_ADMIN_PRIV ]: false, [ BLOCK_LOGIN ]: false
        });
    
    setBtn({ 
        [ SELECT ]: true,
        [ ADD ]: false, [ REMOVE ]: true, [ EDIT ]: true,
        [ ASSIGN_ADMIN_PRIV ]: true, [ BLOCK_LOGIN ]: true
    });
}

/**
 * 각 기능버튼에 대한 상태로직을 관리합니다
 * @param {} ctrl_mode 제어상태를 관리합니다
 * @returns { {
 *  getSelectable: ( id: CTRL_BUTTON_IDS ) => boolean,
 *  getText: ( id: CTRL_BUTTON_IDS ) => string
 * } }
 */
export const useBtnState = ( ctrl_mode = "view", user_select ) => {

    const [ mode, setMode ] = useState( ctrl_mode );
    const [ btn_active, setBtnActive ] = useState( BTN_INIT_STATE );

    useEffect(() => { 
        setMode( ctrl_mode ) 
    }, [ ctrl_mode ]);

    useEffect( () => { 
        updateBtnState( mode, user_select, setBtnActive ) 
    }, [ mode, user_select ]);

    const isSelectable = ( id ) => {
        return btn_active[ id ];
    }

    const getBtnText = ( id ) => {
        if ( !C.ACC_CTRL_BTN_TEXTS[ id ] ) 
            return C.ACC_CTRL_BTN_TEXTS.default;

        if ( !C.ACC_CTRL_BTN_TEXTS[ id ][ mode ] ) 
            return C.ACC_CTRL_BTN_TEXTS[ id ].default;
        
        return C.ACC_CTRL_BTN_TEXTS[ id ][ mode ];
    }

    return {
        getSelectable: isSelectable,
        getText: getBtnText
    };
}