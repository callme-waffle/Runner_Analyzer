
export const SETTING_MENU_IDS = {
    HOME: "SETTING_MENU_IDS/HOME",
    ACCOUNT: "SETTING_MENU_IDS/ACCOUNT",
    ADD_RUNLOG: "SETTING_MENU_IDS/ADD_RUNLOG",
}

export const SETTING_MENUS = {
    [ SETTING_MENU_IDS.HOME ]: {
        mid: SETTING_MENU_IDS.HOME,
        title: "서비스 관리",
        desc: "",
        is_default: true,
        url: "/settings"
    },
    [ SETTING_MENU_IDS.ACCOUNT ]: {
        mid: SETTING_MENU_IDS.ACCOUNT,
        title: "계정관리",
        desc: "서비스를 이용할 수 있는 계정을 관리합니다",
        url: "/settings/accounts",
    },
    [ SETTING_MENU_IDS.ADD_RUNLOG ]: {
        mid: SETTING_MENU_IDS.ADD_RUNLOG,
        title: "보고정정 처리",
        desc: "자동으로 인식되지 않은 보고에 대한 인정여부를 결정합니다",
        url: "/settings/runlogs/add",
    }
}