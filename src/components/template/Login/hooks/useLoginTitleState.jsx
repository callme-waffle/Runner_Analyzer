import { useEffect, useState } from "react";
import util from "../../../../util";

import { useDelayState } from "../../../../hooks/useDelayState";


export const useLoginTitleState = ( is_logined, data ) => {

    const [ is_title_display, title, setTitle ] = useDelayState( "" );
    const [ title_color, setTitleColor ] = useState( "#000" );

    const updateTitle = async ( text, color ) => {
        setTitle( text );
        await util.sleep( 300 );
        setTitleColor( color );
        
        return true;
    }
    
    const [ is_desc_display, desc, setDesc ] = useDelayState( "" );
    const [ desc_color, setDescColor ] = useState( "#000" );

    const updateDesc = async ( text, color ) => {
        setDesc( text );
        await util.sleep( 300 );
        setDescColor( color );

        return true;
    }

    useEffect(() => {
        if ( is_logined && data.user ) {
            updateTitle( `${ data.user.name }님, 안녕하세요!`, "var( --service-color-B )" );
            updateDesc( "오늘도 힘내세요 :)", "var( --service-color-B )" );
            return;
        }

        if ( data.reason ) {
            updateTitle( "오류가 발생했어요", "var( --service-color-alert )" );
            updateDesc( data?.reason || "", "var( --service-color-alert )" );
            return;
        }

        updateTitle( `Run:log 로그인`, "var( --service-color-B )" );
        updateDesc( "사용자 이름과 PIN을\n입력해주세요 =)", "var( --service-color-B )" );
    }, [ is_logined, data ]);
    
    return {
        title: { text: title, display: is_title_display, color: title_color },
        desc: { text: desc, display: is_desc_display, color: desc_color },
    };
}