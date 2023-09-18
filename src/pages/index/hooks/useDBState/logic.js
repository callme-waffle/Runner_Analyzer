import { RANK_TEXT } from "./constant";

const isChatDateChanged = ( text ) => text.includes("요일 ---------------");
const isChatRunLog = ( text ) => text.includes("뜀걸음");

const getLogDate = ( chat ) => {
    const date_text = chat.slice( chat.indexOf("--------------- ") )
        .replaceAll("--------------- ", "").replaceAll(" ---------------", "")
        .replaceAll("년 ", "-")
        .replaceAll("월 ", "-")
        .replaceAll("일 ", "-")
        .slice( 0, -4 );

    console.log(date_text);
    return new Date( date_text );
}

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
        if ( is_runner_checked ) return;
        if ( RANK_TEXT.includes( text ) ) {
            curr_rank = text;
            return;
        }
        if ( text === "동" || text.length == 0 ) return;
        if ( !curr_rank ) return;

        if ( !isNaN( text[0] ) ) {
            is_runner_checked = true;
            return;
        }
        runner_list.push({ rank: curr_rank, name: text });
    });

    const dist = Number( ( words.find( a => a.includes("km") ) || "" ).replaceAll("km", "") );

    return {
        list: runner_list,
        dist
    };
}

const updateUserLog = ( db, info ) => {
    const { date, dist, list } = info;
    list.forEach( ({ rank, name: runner }) => {
        if ( !db[ runner ] )
            db[ runner ] = { total: 0, rank, month_stat: {}, logs: [] }
        
        db[ runner ].total += dist;
        db[ runner ].logs.push( { date, dist } );

        const y = date.getFullYear();
        const m = date.getMonth()+1;
        if ( !db[ runner ].month_stat[ y ] )
            db[ runner ].month_stat[ y ] = {};

        if ( !db[ runner ].month_stat[ y ][ m ] )
            db[ runner ].month_stat[ y ][ m ] = 0;

        db[ runner ].month_stat[ y ][ m ] += dist;
    } );
}

export const parseUserRunLog = ( text ) => {
    const talk = text.split("\n[");
    const logs = {};
    const months = {};

    let date = undefined;
    talk.forEach( (chat) => {
        if ( isChatDateChanged( chat ) ){
            date = getLogDate( chat );

            const y = date.getFullYear();
            const m = date.getMonth()+1;

            if ( !months[y] ) months[y] = {};
            if ( !months[y][m] ) months[y][m] = 0;

            months[y][m]++;
        }

        if ( !isChatRunLog( chat ) ) return;

        const chat_words = getChatWords( chat );

        const { list: runner_list, dist } = getRunInfo( chat_words );
        if ( isNaN( dist ) ) return; // 뜀걸음 기록에 KM단위 거리표기가 없는 경우
        
        updateUserLog( logs, { date, dist, list: runner_list } );
    });

    return { months, logs };
}