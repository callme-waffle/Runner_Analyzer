const API_URL = {
    SERVICE: {
        VERSION: "/service/run/version",
        MONTHS: "/service/run/months",
        STATISTIC: "/service/run/monthly",
        LOG: "/service/run",
    },
    AUTH: {
        LOGIN: "/auth/login",
        LOGOUT: "/auth/logout",
        INFO: "/auth/info"
    }
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
    SERVICE: {
        VERSION: ( opt ) => getParser( API_URL.SERVICE.VERSION, opt ),
        STATISTIC: ( opt ) => getParser( API_URL.SERVICE.STATISTIC, opt ),
        MONTHS: ( opt ) => getParser( API_URL.SERVICE.MONTHS, opt ),
        LOG: ( opt ) => getParser( API_URL.SERVICE.LOG, opt ),
    },
    AUTH: {
        LOGIN: () => API_URL.AUTH.LOGIN,
        LOGOUT: () => API_URL.AUTH.LOGOUT,
        INFO: () => API_URL.AUTH.INFO
    }
}