export const getMonthSelections = ( monthly_data = {} ) => {
    const years = Object.keys( monthly_data );
    if ( years.length === 0 ) return [ { data: undefined, text: "확인된 월 없음" } ]
    return years.map( year =>
        Object.keys( monthly_data[year] )
            .map( month => ({ data: { year:Number( year ), month:Number( month ) }, text: `${ year.slice(2) }년 ${ month }월` }) )
            .reduce( (p, c) => [ ...p, c ], [] )
    ).reduce( (p, c) => [ ...p, ...c ], [] )
}