
/**
 * LogBlock에서 표시하는 텍스트 날짜형식으로 변환하여 반환합니다
 * @param { Date } date 변환할 날짜객체
 */
export const convertDateToTextFormat = ( date ) => `${ date.getMonth()+1 }월 ${ date.getDate() }일`;
