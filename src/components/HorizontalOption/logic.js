export const isValuesSame = ( a, b ) => {
    if ( typeof a !== typeof b ) return false;
    switch( typeof a ) {
        case "object": {
            let is_same = true;
            Object.keys( a ).forEach( key => {
                is_same = is_same && isValuesSame( a[key], b[key] );
            } )
            return is_same;
        }
        default:
            return a === b;
    }
}