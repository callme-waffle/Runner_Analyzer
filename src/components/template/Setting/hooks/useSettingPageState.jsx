import { useCallback, useState } from "react"


/**
 * Setting Template에서의 페이지 상태를 관리합니다
 * @param { string } init 초기 설정 페이지ID
 * @returns { [ string, string, ( new_page: string ) => void, () => boolean ] }
 */
export const useSettingPageState = ( init ) => {
    const [ page, setPage ] = useState( init );
    const [ prev_page, setPrevPage ] = useState( null );

    const updatePage = useCallback( ( new_page ) => {
        setPrevPage( page );
        setPage( new_page );
    }, [ page ] );

    const goPrev = useCallback( () => {
        setPage( prev_page );
        setPrevPage( null );
    }, [ prev_page ] );

    return [ page, prev_page, updatePage, goPrev ];
}