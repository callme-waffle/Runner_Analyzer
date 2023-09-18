import { RUN_DIST } from "../../constant";

export const convertToStatisticList = ( logs, selection ) => {
    return logs
        .map( log => Object.keys( log.month_stat )
            .map( ( year ) => Object.keys( log.month_stat[ year ] )
                .map( ( month ) => [ 
                        log.name, 
                        log.rank, 
                        log.month_stat[ year ][ month ], 
                        { year: Number( year ), month: Number( month ) }, 
                        ( log.month_stat[ year ][ month ] >= RUN_DIST ) ? "통과" : "미통과" 
                ] )
            )
            .reduce( ( p, c ) =>  [ ...p, ...c ], [] )
        )
        .reduce( ( p, c ) =>  [ ...p, ...c ], [] )
        .filter( v => ( ( v[3].year == selection.year ) && ( v[3].month == selection.month ) ) )
        .map( v => {
            v[3] = v[3].month;
            return v;
        } )
};

export const convertToLogList = ( logs, selection, name ) => {
    const { year, month } = selection;

    const udata = logs.find( v => v.name === name );
    if ( !udata ) return [];

    console.log( year, month );
    console.log( udata.logs.filter( v => ( v.date.getFullYear() === year && v.date.getMonth() === (month-1) ) ) );

    return udata.logs
        .filter( v => ( v.date.getFullYear() === year && v.date.getMonth() === (month-1) ) )
        .map( v => [ `${ year }년 ${ month }월 ${ v.date.getDate() }일`, `${ v.dist }km` ] );
};