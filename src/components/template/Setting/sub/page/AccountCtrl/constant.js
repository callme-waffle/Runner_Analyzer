export const CTRL_BUTTON_IDS = {
    ADD: "ACCOUNT_CTRL_BTN/CURD/ADD",
    REMOVE: "ACCOUNT_CTRL_BTN/CURD/REMOVE",
    EDIT: "ACCOUNT_CTRL_BTN/CURD/EDIT",
    SELECT: "ACCOUNT_CTRL_BTN/CURD/SELECT",
    ASSIGN_ADMIN_PRIV: "ACCOUNT_CTRL_BTN/ACC_CTRL/ASSIGN_ADMIN_PRIV",
    BLOCK_LOGIN: "ACCOUNT_CTRL_BTN/ACC_CTRL/BLOCK_LOGIN",
}

export const ACC_CTRL_MODES = {
    VIEW: "ACCOUNT_CTRL_MODES/VIEW",
    SELECT: "ACCOUNT_CTRL_MODES/SELECT",
    CREATE: "ACCOUNT_CTRL_MODES/CREATE",
    EDIT: "ACCOUNT_CTRL_MODES/EDIT"
}

export const ACC_CTRL_BTN_TEXTS = {
    [ SELECT ]: {
        [ C.ACC_CTRL_MODES.SELECT ]: "취소",
        default: "선택"
    },
    [ ADD ]: {
        [ ACC_CTRL_MODES.CREATE ]: "가입",
        default: "추가"
    },
    [ REMOVE ]: {
        [ ACC_CTRL_MODES.CREATE ]: "취소",
        [ ACC_CTRL_MODES.EDIT ]: "취소",
        default: "삭제"
    },
    [ EDIT ]: { 
        [ ACC_CTRL_MODES.EDIT ]: "적용",
        default: "수정" 
    },
    [ ASSIGN_ADMIN_PRIV ]: { default: "관리자권한 부여" },
    [ BLOCK_LOGIN ]: { default: "로그인 중지" },
    default: ""
}