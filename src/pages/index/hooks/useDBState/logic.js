import { EXPORT_DEVICE } from "./constant";
import { CHK_RUNLOGS_EXP, FILTERING_CHATLINES_EXP, EXPORT_DEVICE_CHK_EXP, RUNNERS_LIST_EXP, RUN_DIST_EXP, RUN_DATES_EXP, CHK_PCLOGS_TIMELINE_EXP } from "./regex";

const getChatType = ( text ) => {
    // 현재 기준을 모르므로, 임시로 Enter를 기준으로 chat 구분
    const tmp_chats = text.split("\n");

    let i = 0;
    while( tmp_chats.length > i ) {
        // 채팅에 '충성!' 단어가 있으면, 해당 채팅을 기준으로 추출단말기 구분
        if ( tmp_chats[i].includes("충성!") )
            return (
                // [사용자명] [오전~] => PC에서 내보내기
                ( EXPORT_DEVICE_CHK_EXP[ EXPORT_DEVICE.PC ].test( text ) ) ? EXPORT_DEVICE.PC :
                // yyyy년 mm월 dd일 오전~ => Android에서 내보내기
                ( EXPORT_DEVICE_CHK_EXP[ EXPORT_DEVICE.ANDROID ].test( text ) ) ? EXPORT_DEVICE.ANDROID :
                // yyyy. mm. dd. 오전~ => IOS에서 내보내기
                ( EXPORT_DEVICE_CHK_EXP[ EXPORT_DEVICE.IOS ].test( text ) ) ? EXPORT_DEVICE.IOS :
                // 미지원 형식
                null
            );
        else i++;
    }
    return null;
}

const isChatRunLog = ( chat ) => CHK_RUNLOGS_EXP.test( chat );
const isChatTimeline = ( chat ) => CHK_PCLOGS_TIMELINE_EXP.test( chat );

const parseToDatetime = ( time_text ) => {
    const isAm = /(오전)|(AM)/i.test( time_text );
    const time_idx = time_text.search(/오전|오후|AM|PM/i);
    return new Date(`${
        time_text.slice( 0, time_idx ).replaceAll( /[년월일]/g, "." )
    } ${ time_text.slice( time_idx + 3 ) } ${ isAm ? "AM" : "PM" }`);
}

const ORIGIN_CHAT_CONVERT_FNC = {
    [ EXPORT_DEVICE.ANDROID ]: ( v ) => ({
        date: parseToDatetime( v.slice( 0, v.indexOf(",") ) ),
        chat: v.slice( v.indexOf(" : ", v.indexOf(",")) + 3 )
    }),
    [ EXPORT_DEVICE.IOS ]: ( v ) => ({
        date: parseToDatetime( v.slice( 0, v.indexOf(",") ) ),
        chat: v.slice( v.indexOf(" : ", v.indexOf(",")) + 3 )
    })
}

const getChatFromOriginTalk = ( talk, type ) => {
    let date;
    return ( talk.match( FILTERING_CHATLINES_EXP[ type ] ) || [] )
        .filter( v => isChatRunLog( v ) || isChatTimeline( v ) )
        .map( ORIGIN_CHAT_CONVERT_FNC[ type ] || ( ( v ) => {
                if ( isChatTimeline( v ) ) {
                    date = new Date(
                        v.slice( 0, v.search( /[월화수목금토일]요일/ ) )
                        .replaceAll(/\s{0,1}-{15}\s{0,1}/g, "")
                        .replaceAll( /[년월일]/g, "." )
                    );
                    return null;
                } else return { date, chat: v.slice( v.indexOf( "]", v.indexOf("]") ) + 1 ) }
            }
        ) )
        .filter( v => v );
}

const getRunInfoByChat = ( chat, date ) => {
    // 뜀걸음 용사목록 가져오기
    let curr_rank;
    const runners = ( chat.match( RUNNERS_LIST_EXP ) || [] )
        .map( v => v.split(" ") )
        .map( ( [ rank, name ], i, arr ) => {
            if ( rank === "동" )
                return ({ rank: curr_rank, name });

            curr_rank = rank;
            return ({ rank, name });
        } );

    // 뜀걸음 거리 가져오기
    const [ dist ] = chat.match( RUN_DIST_EXP ) || [];

    return { runners, dist: Number( dist?.replace( "km", "" ) ) };
    
    // // 뜀걸음 일시 가져오기: 향후 update
    const mentioned_rundate = ( chat.match( RUN_DATES_EXP ) || [] );
    // const rundate = () ? mentioned_rundate[0]
}

const addUserLogToDB = ( db, chat, date ) => {
    // 채팅에서 뜀걸음기록 추출
    const { runners, dist } = getRunInfoByChat( chat, date );
    
    // 뜀걸음 기록에 KM단위 거리표기가 없는 경우: pass
    if ( isNaN( dist ) ) return; 

    runners.forEach( ({ rank, name: runner }) => {
        console.log( rank, runner, dist, date );
        // 전체 통계정보 추가
        if ( !db[ runner ] )
            db[ runner ] = { total: 0, rank, month_stat: {}, month_cnt: {}, logs: [] }
        
        db[ runner ].total += dist;
        db[ runner ].logs.push( { date, dist, chat } );
        db[ runner ].rank = rank;

        // 월간통계정보 추가
        const y = date.getFullYear();
        const m = date.getMonth()+1;
        if ( !db[ runner ].month_stat[ y ] )
            db[ runner ].month_stat[ y ] = {};
    
        if ( !db[ runner ].month_stat[ y ][ m ] )
            db[ runner ].month_stat[ y ][ m ] = { dist: 0, cnt: 0 };

        db[ runner ].month_stat[ y ][ m ].dist += dist; // 월간 누적거리
        db[ runner ].month_stat[ y ][ m ].cnt++; // 월간 누적횟수
    } );
}

export const parseUserRunLog = ( talk ) => {    
    const chat_format = getChatType( talk );
    const chats = getChatFromOriginTalk( talk, chat_format );

    const logs = {};
    const months = {};
    
    chats.forEach( ({ date, chat }) => {
        // 기록날짜 추가
        const y = date.getFullYear();
        const m = date.getMonth()+1;

        if ( !months[y] ) months[y] = {};
        if ( !months[y][m] ) months[y][m] = 0;
        months[y][m]++;
        
        // 뜀걸음 기록 반영
        addUserLogToDB( logs, chat, date );
    });
    
    return { months, logs };
}