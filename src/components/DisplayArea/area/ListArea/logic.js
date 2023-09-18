import { RUN_DIST } from "../../constant";

export const convertToStatisticList = ( logs, selection ) => {
    return logs
        .map( log => Object.keys( log.month_stat ) // 데이터에 포함되어있는 매년정보 순회
            .map( ( year ) => Object.keys( log.month_stat[ year ] ) // 데이터에 포함되어있는 매월정보 순회
                .map( ( month ) => [ // 초기 목록행 생성
                        log.name, // 0: 뜀걸음 대상자 이름
                        log.rank, // 1: 계급
                        `${ log.month_stat[ year ][ month ].dist }km`, // 2: 월간 누적기록
                        `${ log.month_stat[ year ][ month ].cnt }회`, // 3: 월간 누적횟수
                        ( log.month_stat[ year ][ month ] >= RUN_DIST ) ? "통과" : "미통과", // 4: 통과여부
                        { year: Number( year ), month: Number( month ) }, // 5: 기록 해당월(필터링목적)
                ] )
            )
            .reduce( ( p, c ) =>  [ ...p, ...c ], [] ) // 배열병합
        )
        .reduce( ( p, c ) =>  [ ...p, ...c ], [] ) // 배열병합
        .filter( v => ( ( v[5].year == selection.year ) && ( v[5].month == selection.month ) ) ) // 현재 선택값으로 필터링
        .map( v => v.slice( 0, 5 ) )
};

export const convertToLogList = ( logs, selection, name ) => {
    const { year, month } = selection;

    const udata = logs.find( v => v.name === name );
    if ( !udata ) return [];

    console.log( year, month );
    console.log( udata.logs.filter( v => ( v.date.getFullYear() === year && v.date.getMonth() === (month-1) ) ) );

    return udata.logs
        .filter( v => ( v.date.getFullYear() === year && v.date.getMonth() === (month-1) ) )
        .map( v => [ `${ year }년 ${ month }월 ${ v.date.getDate() }일`, `${ v.dist }km`, `[${v.chat}` ] );
};