import { EXPORT_DEVICE } from "./constant"

export const EXPORT_DEVICE_CHK_EXP = {
    // [사용자명] [오전~] => PC에서 내보내기
    [ EXPORT_DEVICE.PC ]: /\[.{0,}\]\s\[((오전)|(오후))\s\d{0,}\:\d{0,}\]/,
    // yyyy년 mm월 dd일 오전~ => Android에서 내보내기
    [ EXPORT_DEVICE.ANDROID ]: /\d{4}년\s\d{1,2}월\s\d{1,2}일\s((오전)|(오후))\s\d{0,}\:\d{0,}/,
    // yyyy. mm. dd. 오전~ => IOS에서 내보내기
    [ EXPORT_DEVICE.IOS ]: /\d{4}\.\s\d{1,2}\.\s\d{1,2}\.\s((오전)|(오후))\s\d{0,}\:\d{0,}/,
}

export const FILTERING_CHATLINES_EXP = {
    // [사용자명] [오전~] => PC에서 내보내기
    // 날짜값이 텍스트마다 없으므로 날짜기준선도 함께추출
    [ EXPORT_DEVICE.PC ]: /((\-{1,})\s(\d{4}년)\s(\d{1,2}월)\s(\d{1,2}일)\s([월화수목금토일]요일)\s(\-{1,}))|(\[.{0,}\]\s\[((오전)|(오후))\s\d{0,}\:\d{0,}\].{0,})/g,
    // yyyy년 mm월 dd일 오전~ => Android에서 내보내기
    [ EXPORT_DEVICE.ANDROID ]: /\d{4}년\s\d{1,2}월\s\d{1,2}일\s((오전)|(오후))\s\d{0,}\:\d{0,}.{0,}/g,
    // yyyy. mm. dd. 오전~ => IOS에서 내보내기
    [ EXPORT_DEVICE.IOS ]: /\d{4}\.\s\d{1,2}\.\s\d{1,2}\.\s((오전)|(오후))\s\d{0,}\:\d{0,}.{0,}/g,
}

export const CHK_RUNLOGS_EXP = /.{0,}(부터).{0,}(까지).{0,}(뜀걸음).{0,}(\dkm).{0,}/;
export const CHK_PCLOGS_TIMELINE_EXP = /((\-{1,})\s(\d{4}년)\s(\d{1,2}월)\s(\d{1,2}일)\s([월화수목금토일]요일)\s(\-{1,}))/;

export const RUNNERS_LIST_EXP = /(이병|일병|상병|병장|동)\s([가-힣]{2,4})/g;
export const RUN_DIST_EXP = /\d{1,}km/;
export const RUN_DATES_EXP = /엊그제|그제|어제|오늘|(\d{1,2}월\s?\d{1,2}일)/g;