import { useCallback, useContext, useEffect, useState } from "react";

import * as S from "./style";
import * as L from "./logic";
import * as C from "./constant";

import SettingFncBtns from "../../components/SettingFncBtns";

import { useBtnState } from "./hooks/useBtnState";
import { useAccountCtrlState } from "./hooks/useAccountCtrlState";

const SettingPageAccocuntCtrl = () => {

    const {
        data: { mode, user_select },
        hooks: { setMode, setNewUserInfo }
    } = useAccountCtrlState();
    const {
        data: { is_ready, accounts },
        hooks: accListHooks
    } = useAccountList( mode );

    const btnStateProps = useBtnState();

    const onCtrlBtnClick = async ( type ) => {
        try {
            if ( mode === C.ACC_CTRL_MODES.CREATE ) 
                switch( type ) {
                    case "add": {
                        const new_user = accounts.find( acc => user_select.includes( acc.uid ) );
                        await L.addUser( new_user );
                        accListHooks.refresh();
                    }
                    case "remove": 
                        setMode( C.ACC_CTRL_MODES.SELECT ); 
                        break;
                    default:
                        break;
                } 
            else if ( mode === C.ACC_CTRL_MODES.EDIT ) 
                switch( type ) {
                    case "edit": {
                        const new_user = accounts.find( acc => user_select.includes( acc.uid ) );
                        await L.addUser( new_user );
                        accListHooks.refresh();
                    }
                    case "remove": 
                        setMode( C.ACC_CTRL_MODES.SELECT ); 
                        break;
                    default:
                        break;
                } 
            else switch( type ) {
                case "select": 
                    setMode( v => 
                        ( v === C.ACC_CTRL_MODES.VIEW ) ? 
                            C.ACC_CTRL_MODES.SELECT : 
                            C.ACC_CTRL_MODES.VIEW 
                    );
                    break;
                case "add":
                    setMode( C.ACC_CTRL_MODES.CREATE );
                    break;
                case "remove": {
                    const user_confirm = await window.prompt( `선택한 ${ user_select.length }개의 계정을 삭제할까요?` );
                    if ( !user_confirm ) return;

                    await L.removeUsers( user_select );
                    break;
                }
                case "edit": {
                    const [ edit_account ] = user_select;
                    setNewUserInfo( edit_account );
                    
                    setMode( C.ACC_CTRL_MODES.EDIT );
                    break;
                }
            }
            setMsg( null );
        } catch(e) { setMsg( e.message ) }
    }

    const onNewUserInfoInputed = ( v ) => {
        setNewUserInfo( v );
    }

    return <S.SettingAccountCtrlArea>
        <S.FncCtrlArea>
            <S.CURDBtnArea>
                <SettingFncBtns className="curdbtn-area left-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.SELECT ] } 
                    hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
                <SettingFncBtns className="curdbtn-area right-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.ADD, C.CTRL_BUTTON_IDS.REMOVE, C.CTRL_BUTTON_IDS.EDIT, ] } 
                    hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
            </S.CURDBtnArea>
            <S.AccountBtnArea>
                <SettingFncBtns className="curdbtn-area right-area"
                    btn_ids={ [ C.CTRL_BUTTON_IDS.ASSIGN_ADMIN_PRIV, C.CTRL_BUTTON_IDS.BLOCK_LOGIN, ] } 
                    hooks={ btnStateProps }
                    onClick={ onCtrlBtnClick }
                />
            </S.AccountBtnArea>
            <InputBlock
                icon={ <IconUser/> }
                placeholder="사용자 이름" 
                value={ search_name } onValueChange={ setSearchName }
            />
        </S.FncCtrlArea>
        <S.MsgArea>
            <SettingMsgBlock>{ msg }</SettingMsgBlock>
        </S.MsgArea>
        <S.UserListArea>
            <S.UserListWrap>
                { ( mode === "create" ) &&
                    <UserCreateBlock onInputComplete={ onNewUserInfoInputed } />
                }
                { user_list.map( ( v, i ) => 
                    <UserBlock 
                        index={ i+1 } 
                        values={{ 
                            title: v.name, 
                            contents: L.calcExpireDDay( v?.expired_at ),
                            value: v.uid,
                            selected: select.includes( v.uid )
                        }}

                        mode={ mode }
                        onClick={ onUserblockClick }

                        animation={ true }
                    />
                ) }
            </S.UserListWrap>    
        </S.UserListArea>
    </S.SettingAccountCtrlArea>
}

export default SettingPageAccocuntCtrl;