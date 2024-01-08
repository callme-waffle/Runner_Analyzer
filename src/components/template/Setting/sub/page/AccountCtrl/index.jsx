import { useCallback, useContext, useEffect, useState } from "react";

import * as S from "./style";
import * as L from "./logic";
import * as R from "./request";
import * as C from "./constant";

import SettingFncBtns from "../../components/SettingFncBtns";
import SettingMsgBlock from "../../components/SettingMsgBlock";

import InputBlock from "../../../../../molecule/InputBlock";
import UserBlock from "../../../../../molecule/UserBlock";
import UserCreateBlock from "../../../../../molecule/UserCreateBlock";

import { useBtnState } from "./hooks/useBtnState";
import { useAccountCtrlState } from "./hooks/useAccountCtrlState";
import { IconUser } from "@tabler/icons-react";
import { useAccountList } from "./hooks/useAccountList";

const SettingPageAccocuntCtrl = () => {

    const {
        data: { mode, user_select },
        hooks: { updateMode, onUserblockClick }
    } = useAccountCtrlState();
    const {
        data: { is_ready, accounts },
        hooks: accListHooks
    } = useAccountList( mode );
    const btnStateProps = useBtnState( mode, user_select );

    const [ tmp_user_info, setTmpUserInfo ] = useState( {} );
    const [ msg, setMsg ] = useState("");

    const requestAPIAction = async ( msg, apiAction, attrs ) => {
        try {
            const user_confirm = await window.confirm( msg );
            if ( !user_confirm )
                return;
            
            if ( user_select.length === 0 && !tmp_user_info?.name )
                return;
        
            const { result: action_result, reason: action_error_reason } = await apiAction( ...attrs );
            if ( !action_result ) throw new Error( action_error_reason );

            const { result: list_result, reason: list_error_reason } = await accListHooks.search();
            if ( !list_result ) throw new Error( list_error_reason );

            console.log( list_result );
        } catch(e) {
            setMsg( e.message );
        } finally {
            updateMode( "default", C.ACC_CTRL_MODES.VIEW );
        }
    }

    const onCtrlBtnClick = async ( e, bid ) => {
        switch( bid ) {
            case C.CTRL_BUTTON_IDS.SELECT: 
                return updateMode( "toggle", [ C.ACC_CTRL_MODES.SELECT, C.ACC_CTRL_MODES.VIEW ] );
            case C.CTRL_BUTTON_IDS.ADD: 
                return onADDBtnClick();
            case C.CTRL_BUTTON_IDS.EDIT: 
                return onEDITBtnClick();
            case C.CTRL_BUTTON_IDS.REMOVE: 
                return onREMOVEBtnClick();
            case C.CTRL_BUTTON_IDS.ASSIGN_ADMIN_PRIV: 
                return await requestAPIAction( `선택한 ${ user_select.length }개의 계정권한을 1계급 승급시킬까요? 승급된 권한은 내릴 수 없습니다.`, R.updateUserPriv, [ user_select ] );
            case C.CTRL_BUTTON_IDS.BLOCK_LOGIN: 
                return await requestAPIAction( `선택한 ${ user_select.length }개 계정의 로그인을 차단할까요?`, R.blockUser, [ user_select ] );
        }
    };

    const onADDBtnClick = async () => {
        if ( mode === C.ACC_CTRL_MODES.CREATE ) {
            await requestAPIAction( `${ tmp_user_info.dc_date }에 전역하는 ${ tmp_user_info.name } 계정을 생성할까요?`, R.addUser, [ tmp_user_info.name, tmp_user_info.dc_date ] );
        } else 
            updateMode( "default", C.ACC_CTRL_MODES.CREATE );
    };

    const onREMOVEBtnClick = async () => {
        if ( mode === C.ACC_CTRL_MODES.CREATE ) 
            updateMode( "default", C.ACC_CTRL_MODES.VIEW );
        else if ( mode === C.ACC_CTRL_MODES.EDIT ) {
            accListHooks.search();
            updateMode( "default", C.ACC_CTRL_MODES.VIEW );
        }
        else {
            await requestAPIAction( `선택한 ${ user_select.length }개의 계정을 삭제할까요?`, R.removeUser, [ user_select ] );
        }
        return;
    };

    const onEDITBtnClick = async () => {
        if ( mode === C.ACC_CTRL_MODES.EDIT ) {
            await requestAPIAction( `선택된 계정의 변경사항을 저장합니다`, R.updateUser, [ tmp_user_info ] );
        } else {
            const [ uid ] = user_select;
            if ( !uid ) return;
            
            const user_info = accounts.find( v => v.uid === uid );
            if ( !user_info ) return;
            
            const { name, expired_at } = user_info;
            const exd = new Date( Number(expired_at) );
            setTmpUserInfo( {
                uid, name, 
                dc_date: !expired_at ? "" : `${ 
                        exd.getFullYear() 
                    }.${ 
                        ( exd.getMonth() < 9 ) ? `0${ exd.getMonth()+1 }` : exd.getMonth()+1 
                    }.${
                        ( exd.getDate() < 10 ) ? `0${ exd.getDate() }` : exd.getDate() 
                    }`
            } );
            accListHooks.hideAccount( uid );

            updateMode( "default", C.ACC_CTRL_MODES.EDIT );
        }
        return;
    };

    useEffect(() => {
        if ( mode === C.ACC_CTRL_MODES.VIEW ) 
            setTmpUserInfo({});
    }, [ mode ]);

    return <S.SettingAccountCtrlArea>
        <S.FncCtrlArea>
            <S.CURDBtnArea>
                <SettingFncBtns className="curdbtn-area left-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.SELECT ] } 
                    btn_hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
                <SettingFncBtns className="curdbtn-area right-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.ADD, C.CTRL_BUTTON_IDS.REMOVE, C.CTRL_BUTTON_IDS.EDIT, ] } 
                    btn_hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
            </S.CURDBtnArea>
            <S.AccountBtnArea>
                <SettingFncBtns className="accbtn-area right-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.ASSIGN_ADMIN_PRIV, C.CTRL_BUTTON_IDS.BLOCK_LOGIN, ] } 
                    btn_props={ {
                        common: { className: "accountbtn" },
                        [ C.CTRL_BUTTON_IDS.ASSIGN_ADMIN_PRIV ]: { className: "admin-priv-ctrl-btn" },
                    } } 
                    btn_hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
            </S.AccountBtnArea>
            <InputBlock
                icon={ <IconUser/> }
                placeholder="검색필터"
                onValueChange={ accListHooks.search }
            />
        </S.FncCtrlArea>
        <S.MsgArea>
            <SettingMsgBlock>{ msg }</SettingMsgBlock>
        </S.MsgArea>
        <S.UserListArea>
            <S.UserListWrap>
                { ( [ C.ACC_CTRL_MODES.CREATE, C.ACC_CTRL_MODES.EDIT ].includes( mode ) ) &&
                    <UserCreateBlock 
                        init={ tmp_user_info }
                        onInputComplete={ setTmpUserInfo }
                    />
                }
                { accounts.map( ( v, i ) => 
                    <UserBlock 
                        key={ v.uid } 
                        index={ i+1 } 
                        values={{ 
                            title: v.name, 
                            contents: L.calcExpireDDay( v?.expired_at ),
                            value: v.uid,
                            selected: user_select.includes( v.uid )
                        }}

                        mode={ ( mode === C.ACC_CTRL_MODES.SELECT ) ? "select" : "view" }
                        onClick={ onUserblockClick }

                        animation={ true }
                    />
                ) }
            </S.UserListWrap>    
        </S.UserListArea>
    </S.SettingAccountCtrlArea>
}

export default SettingPageAccocuntCtrl;