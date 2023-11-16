import { useEffect, useState } from "react";
import util from "../../../../util";


export const useLoginTitleState = ( is_logined, data ) => {

    const [ title, setTitle ] = useState( "" );
    const [ is_title_display, setTitleDisplay ] = useState( true );
    const [ title_color, setTitleColor ] = useState( "#000" );

    const updateTitle = async ( text, color ) => {
        setTitleDisplay( false );
        await util.sleep( 300 );
        setTitle( text );
        setTitleColor( color );
        setTitleDisplay( true );

        return true;
    }
    
    const [ desc, setDesc ] = useState( "" );
    const [ is_desc_display, setDescDisplay ] = useState( true );
    const [ desc_color, setDescColor ] = useState( "#000" );

    const updateDesc = async ( text, color ) => {
        setDescDisplay( false );
        await util.sleep( 300 );
        setDesc( text );
        setDescColor( color );
        setDescDisplay( true );

        return true;
    }
    

    useEffect(() => {
        console.log( is_logined, data );
        if ( is_logined && data.user ) {
            updateTitle( `${ data.user.name }님, 안녕하세요!`, "var( --service-color-B )" );
            updateDesc( "오늘도 힘내세요 :)", "var( --service-color-B )" );
            return;
        }

        if ( data.reason ) {
            updateTitle( "오류가 발생했어요", "var( --service-color-alert )" );
            updateDesc( data.reason, "var( --service-color-alert )" );
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