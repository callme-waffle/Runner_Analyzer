export const FIX_STAGE_VIEWMODES = {
    VISIBLE: "FIX_SATGE_VIEWMODE/VISIBLE",
    INVISIBLE: "FIX_SATGE_VIEWMODE/INVISIBLE",
}

export const FIX_TEMPLATE_STAGES = {
    INIT: "FIX_TEMPLATE_STAGE/INIT",
    UPDATE_CHAT: "FIX_TEMPLATE_STAGE/UPDATE_CHAT",
    ADD_LOG: "FIX_TEMPLATE_STAGE/ADD_LOG",
}

export const FIX_TEMPLATE_TITLES = {
    [ FIX_TEMPLATE_STAGES.INIT ]: "이상한 내용이 있나요?\n어떤 문제가 있는지 알려주세요",
    [ FIX_TEMPLATE_STAGES.UPDATE_CHAT ]: "채팅 내용을\n업데이트할게요",
    [ FIX_TEMPLATE_STAGES.ADD_LOG ]: "보고기록 검토를\n요청할게요"
}

export const FIX_TEMPLATE_DESCS = {
    [ FIX_TEMPLATE_STAGES.UPDATE_CHAT ]: `아래 과정을 따라 기록 업데이트를 진행해주세요.\n업데이트 된 기록은 사용자 모두에게 적용됩니다.`,
    [ FIX_TEMPLATE_STAGES.ADD_LOG ]: `가장 최근 업데이트 된 카카오톡 대화목록이에요.\n반영하고자 하는 대화들을 선택해주세요`
}

export const FIX_PROBLEM_LIST = [
    {
        createText: ( version, user ) => `최근 업데이트 이후 보고한 기록을 반영하고 싶어요\n(최근 업데이트 버전: ${ version } / ${ user })`,
        btn_name: "보고기록 업데이트",
        state: FIX_TEMPLATE_STAGES.UPDATE_CHAT
    },
    {
        text: "보고한 기록이 반영되지 않아요 / 잘못된 정보가 보고되었어요",
        btn_name: "뜀걸음 보고 정정요청",
        state: FIX_TEMPLATE_STAGES.ADD_LOG
    },
];