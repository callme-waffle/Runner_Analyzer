const API_URL = {
    MONTHS: "/run/months",
    STATISTIC: "/run/monthly",
    LOG: "/run",
}

const get_parser = ( uri = "", option = {} ) => `${ 
    uri 
}?${ 
    Object.keys( option )
    .map( v => `${ v }=${ option[v] }` )
    .reduce( ( a, b ) => `${a}&${b}`, "" )
}`

export const API_URL_PARSER = {
    STATISTIC: ( opt ) => get_parser( API_URL.STATISTIC, opt ),
    MONTHS: ( opt ) => get_parser( API_URL.MONTHS, opt ),
}