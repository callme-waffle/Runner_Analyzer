import { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import * as L from "./logic";
import * as R from "./request";

import InputBlock from "../../../../../molecule/InputBlock";
import { IconUser } from "@tabler/icons-react";

import SettingFncBtn from "../../components/SettingFncBtn";
import UserBlock from "../../../../../molecule/UserBlock";
import UserCreateBlock from "../../../../../molecule/UserCreateBlock";
import SettingMsgBlock from "../../components/SettingMsgBlock";
import { useAccountCtrlState } from "./hooks/useAccountCtrlState";
import { useAccountListState } from "./hooks/useAccountListState";

const SettingPageAccocuntCtrl = () => {
    
    // useAccountListState
    const {} = useAccountListState();

    // useAccountCtrlState
    const {
        states: { btn_active, mode, select },
        logics: { setMode, setSelect }
    } = useAccountCtrlState( setUserList );

    const addCreateUserBlock = () => {
        setUserList( p => [ { mode: "create" }, ...p ] );
        setMode( "create" );
    }

    const removeCreateUserBlock = () => {
        setUserList( p => p.slice(1) );
        setMode( "view" );
    }

    const findAddUser = ( user_list ) => {
        return user_list.find( v => v.mode === "create" );
    }

    const addUser = async ( join_info ) => {
        if ( !join_info )
            throw new Error("가입정보가 입력된 사용자가 없습니다.");
    
        if ( !join_info.name || !join_info.expired_at )
            throw new Error("일부 정보가 올바르지 않습니다.");
    
        const join_result = await R.joinUser( join_info.name, join_info.expired_at );
        if ( !join_result.result )
            throw new Error( join_result.reason ); 
    }

    const onCtrlBtnClick = useCallback( async ( type ) => {
        try {
            if ( mode === "create" ) switch( type ) {
                case "add": {
                    addUser( findAddUser( user_list ) );
                    break;
                }
                case "remove": 
                    removeCreateUserBlock(); break;
                default:
                    break;
            } else switch( type ) {
                case "select": 
                    setMode( v => ( v === "view" ) ? "select" : "view" ); break;
                case "add":
                    addCreateUserBlock(); break;
                case "remove":
                    break;
                case "edit":
                    break;
            }
            setMsg( null );
        } catch(e) { setMsg( e.message ) }
    }, [ mode, user_list ] );

    const onUserblockClick = useCallback( ( e, v ) => {
        switch( mode ) {
            case "create":
                return;
            case "view": {
                setSelect( p => ( p[0] === v ) ? [] : [ v ] );
                break
            }
            case "select": {
                setSelect( p => 
                    ( p.includes( v ) ) ? 
                        p.filter( a => a !== v ) : 
                        [ ...p, v ] 
                )
            }
        }
    }, [ mode ] );

    return <S.SettingAccountCtrlArea>
        <S.FncCtrlArea>
            <S.CURDBtnArea>
                <section className="curdbtn-area left-area">
                    <SettingFncBtn selectable={ btn_active.select } onClick={ () => onCtrlBtnClick("select") }>{ 
                        ( mode === "select" ) ? "취소" : "선택" 
                    }</SettingFncBtn>
                </section>
                <section className="curdbtn-area right-area">
                    <SettingFncBtn type="add" selectable={ btn_active.add }
                        onClick={ () => onCtrlBtnClick("add") }
                    >{ ( mode === "create" ) ? "가입" : "추가"  }</SettingFncBtn>
                    <SettingFncBtn type="remove" selectable={ btn_active.remove }
                        onClick={ () => onCtrlBtnClick("remove") }
                    >{ ( mode === "create" ) ? "취소" : "삭제"  }</SettingFncBtn>
                    <SettingFncBtn selectable={ btn_active.edit }
                        onClick={ () => onCtrlBtnClick("edit") }
                    >수정</SettingFncBtn>
                </section>
            </S.CURDBtnArea>
            <S.AccountBtnArea>
                <SettingFncBtn selectable={ btn_active.adminPriv } className="accountbtn admin-priv-ctrl-btn">관리자권한 부여</SettingFncBtn>
                <SettingFncBtn selectable={ btn_active.loginCtrl } className="accountbtn login-avail-ctrl-btn">로그인 중지</SettingFncBtn>
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
                    <UserCreateBlock 
                        onInputComplete={ onNewUserInfoInputed }
                    />
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