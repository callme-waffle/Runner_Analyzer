import * as R from "./request";

const ONE_DAY = 24 * 60 * 60 * 1000;

export const calcExpireDDay = ( expire ) => {
    if ( !expire ) return [ "지정된 만료일 없음" ];
    
    const remain_time = expire - new Date().getTime();
    if ( remain_time < 0 ) return [ "전역" ];

    return [ `${ Math.floor( remain_time / ONE_DAY ) }일`, "남음" ];
}