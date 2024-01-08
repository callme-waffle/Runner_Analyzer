import { useEffect, useState } from "react";
import * as R from "../request";

export const useAccountListState = () => {
    const [ search_name, setSearchName ] = useState( "" );
    const [ user_list, setUserList ] = useState([]);
    const [ is_userlist_ready, setIsUserlistReady ] = useState( false );
    const [ msg, setMsg ] = useState( "" );

    const onNewUserInfoInputed = ( values ) => {
        const { name, dc_date } = values;
        if ( !name || !dc_date ) return;
        setUserList( p => p.map( acc => {
            if ( acc.mode !== "create" ) return acc;
            return {
                mode: "create",
                tmp_obj: true,
                uid: "TMP_UID",
                name,
                expired_at: new Date( dc_date ).getTime()
            }
        } ) );
    }

    useEffect( () => {
        setIsUserlistReady( false );
        try { ( async () => {
            const userlist_result = await R.getUserList( search_name );
            if ( !userlist_result.result )
                throw new Error( userlist_result.reason );

            setUserList( userlist_result.list );
        } )() } 
        catch(e) { setMsg( e.message ); } 
        finally { setIsUserlistReady( true ); }
    }, [ search_name ] );

    return {

    }
}