import { useState, useCallback, useEffect, useMemo } from "react";

import * as R from "../request";

export const useAccountList = ( mode ) => {
    const [ filter, setFilter ] = useState( {} );
    const [ page, setPage ] = useState( 0 );
    const [ perpage_cnt, setPerpageCnt ] = useState( 10 );
    
    const [ is_ready, setIsReady ] = useState( false );
    const [ list, setList ] = useState( [] );

    /**
     * 인자로 주어진 필터를 반영한 계정목록을 조회합니다
     * @param { { [ keys in string ]: string } } filter 적용할 필터입니다
     * @param { number } page 조회할 페이지번호 입니다
     * @param { number } perpage_cnt 각 페이지 당 표시할 계정의 개수입니다
     * @returns { { result: true } | { result: false, reason: string } }
     */
    const requestList = async ( filter = {}, page = 1, perpage_cnt = 10 ) => {
        let request_result = {};
        setIsReady( false );
        try {
            const userlist_result = await R.getUserList( filter, page, perpage_cnt );
            if ( !userlist_result.result )
                throw new Error( userlist_result.reason );

            setList( userlist_result.list );
            setFilter( filter );
            setPage( userlist_result.page );
            setPerpageCnt( userlist_result.perpage_cnt );

            request_result = { result: true };
        } 
        catch(e) { 
            request_result = {
                result: false,
                reason: e.message
            };
        } 
        finally { 
            setIsReady( true );
            return request_result;
        }
    };

    /**
     * 특정 UID의 계정이 현재 계정목록에 표시되지 않도록 임시적으로 숨깁니다. 서버에서 삭제되지 않습니다.
     * @param { UserID } uid 현재 계정목록에서 임시적으로 숨길 계정의 사용자ID 입니다
     */
    const hideAccount = async ( uid ) => {
        setList( v => v.filter( d => d.uid !== uid ) );
        return true;
    }

    return {
        data: {
            is_ready,
            accounts: list,
            view_info: {
                filter,
                page,
                perpage_cnt
            }
        },
        hooks: {
            search: requestList,
            hideAccount
        }
    }
}