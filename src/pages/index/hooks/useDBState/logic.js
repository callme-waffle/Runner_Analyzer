import { RANK_TEXT } from "./constant";

const isChatRunLog = ( text ) => text.includes("뜀걸음");

const getChatWords = ( chat ) => {
    const chat_sp = chat.indexOf( "]", chat.indexOf("]") + 1 );
    const chat_content = chat.slice( chat_sp+1 );
    return chat_content.split( " " );
}

const getRunInfo = ( words ) => {
    let curr_rank = undefined;
    let is_runner_checked = false;
    
    const runner_list = [];
    words.forEach( text => {
        // 이미 뜀걸음 기록대상자 확인이 완료된 경우: 반복중지
        if ( is_runner_checked ) return;
        
        // 현재 확인중인 단어가 계급인 경우: 계급 update
        if ( RANK_TEXT.includes( text ) ) { 
            curr_rank = text;
            return;
        }
        
        // 설정된 계급이 없으면: 계급이 설정될 때 까지 이동
        if ( !curr_rank ) return;
        
        // 현재 단어가 '동' 이거나 띄어쓰기 공백만 있는 경우: 다음 반복으로 이동
        if ( text === "동" || text.length == 0 ) return;
        
        // 현재 단어의 시작이 숫자인 경우: 기록대상자 확인이 끝난 것으로 간주하고 반복중지
        if ( !isNaN( text[0] ) ) {
            is_runner_checked = true;
            return;
        }

        // 기록대상자 목록에 현재 단어를 사용자명으로 하여 추가
        runner_list.push({ rank: curr_rank, name: text });
    });

    const dist = Number( ( words.find( a => a.includes("km") ) || "" ).replaceAll("km", "") );

    return { list: runner_list, dist };
}

const addUserLogToDB = ( db, chat, date ) => {
    // 채팅에서 뜀걸음기록 추출
    const chat_words = getChatWords( chat );
    const { list: runner_list, dist } = getRunInfo( chat_words );
    
    // 뜀걸음 기록에 KM단위 거리표기가 없는 경우: pass
    if ( isNaN( dist ) ) return; 

    runner_list.forEach( ({ rank, name: runner }) => {
        // 전체 통계정보 추가
        if ( !db[ runner ] )
            db[ runner ] = { total: 0, rank, month_stat: {}, month_cnt: {}, logs: [] }
        
        db[ runner ].total += dist;
        db[ runner ].logs.push( { date, dist, chat } );

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

const parseMobileExportLog = ( text ) => {
    const talk = text.split("\n");
    const logs = {};
    const months = {};

    talk.forEach( ( full_chat ) => {
        // 현재 채팅이 뜀걸음기록이 아닌경우: pass
        if ( !isChatRunLog( full_chat ) ) return;

        const time_position = full_chat.indexOf(",");
        const split_position = full_chat.indexOf( ":", time_position );
        const date = new Date( full_chat.slice( 0, split_position ).split("오")[0] );
        const time_data = "오" + full_chat.slice( 0, time_position ).split("오")[1];
        const chat = full_chat.slice( split_position + 1 );

        // 기록날짜 추가
        if ( !isNaN(date.getFullYear()) ) {

            const y = date.getFullYear();
            const m = date.getMonth()+1;
    
            if ( !months[y] ) months[y] = {};
            if ( !months[y][m] ) months[y][m] = 0;
    
            months[y][m]++;
            
        }

        // 뜀걸음 기록 반영
        addUserLogToDB( logs, `[${ time_data }]${ chat }`, date );
    } )

    return { months, logs };
}

const parsePCExportLog = ( text ) => {
    const isChatDateChanged = ( text ) => text.includes("요일 ---------------");
    const getLogDate = ( chat ) => {
        const chk_text = chat.slice( chat.indexOf( "--------------- " ) );
        const year_idx = chk_text.indexOf("년 ");
        const month_idx = chk_text.indexOf("월 ");
        const date_idx = chk_text.indexOf("일 ");
    
        const year_txt = chk_text.substr( year_idx-4, 4 );
        const month_txt = chk_text.slice( year_idx+2, month_idx );
        const date_txt = chk_text.slice( month_idx+2, date_idx );
    
        const year = Number( year_txt );
        const month = Number( month_txt );
        const date = Number( date_txt );
    
        const parsed_date = new Date( `${ year }-${ month }-${ date }` );
        return parsed_date;
    }

    const talk = text.split("\n[");
    const logs = {};
    const months = {};

    let date = undefined;
    talk.forEach( (chat) => {
        // 현재 채팅이 날짜기준선인 경우: 기록날짜 update
        if ( isChatDateChanged( chat ) ){
            date = getLogDate( chat );

            const y = date.getFullYear();
            const m = date.getMonth()+1;

            if ( !months[y] ) months[y] = {};
            if ( !months[y][m] ) months[y][m] = 0;

            months[y][m]++;
        }

        // 현재 채팅이 뜀걸음기록이 아닌경우: pass
        if ( !isChatRunLog( chat ) ) return;
        
        // 뜀걸음 기록 반영
        addUserLogToDB( logs, chat.slice( chat.indexOf("[") ), date );
    });

    return { months, logs };
}

export const parseUserRunLog = ( text ) => {
    if ( !text.split("\n")[0].includes( ".txt" ) )
        return parsePCExportLog( text );

    return parseMobileExportLog( text );
}