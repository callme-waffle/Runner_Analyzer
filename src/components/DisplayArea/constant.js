export const RUN_DIST = 100;

export const ListMode = {
    default: "RUNNER_ANALYZER/LIST_MODE/DEFAULT",
    statistic: "RUNNER_ANALYZER/LIST_MODE/STATISTIC",
    logging: "RUNNER_ANALYZER/LIST_MODE/LOGGING"
}

export const ListTitle = {
    [ ListMode.default ]: [],
    [ ListMode.statistic ]: [ "이름", "계급", "누적거리", "기록횟수", "통과여부" ],
    [ ListMode.logging ]: [ "기록일자", "기록거리", "메세지 기록" ]
}

export const LISTMODE_OPTION_SELECTIONS = [
    { data: ListMode.statistic, text: "전체통계" },
    { data: ListMode.logging, text: "개인기록" }
]

export const SelectionType = {
    MONTH: "SERVICE/SELCTION_TYPE/MONTH",
    NAME: "SERVICE/SELECTION_TYPE/NAME",
}