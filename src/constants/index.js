const API_URL = {
    MONTHS: "/run/months",
    STATISTIC: "/run/monthly",
    LOG: "/run",
}

const getParser = ( uri = "", option = {} ) => `${ 
    uri 
}?${ 
    Object.keys( option )
    .map( v => `${ v }=${ option[v] }` )
    .reduce( ( a, b ) => `${a}&${b}`, "" )
    .replace("&", "")
}`

export const API_URL_PARSER = {
    STATISTIC: ( opt ) => getParser( API_URL.STATISTIC, opt ),
    MONTHS: ( opt ) => getParser( API_URL.MONTHS, opt ),
    LOG: ( opt ) => getParser( API_URL.LOG, opt )
}