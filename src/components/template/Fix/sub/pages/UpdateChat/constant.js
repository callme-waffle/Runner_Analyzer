export const UPDATE_CHAT_HOWTO = [
    "아래 버튼을 클릭해 카카오톡 메시지를 보낼 이메일 주소를 복사해주세요",
    "채팅방 에서 '대화 내용 내보내기' > '텍스트 메시지만 보내기' 를 선택해주세요",
    "이메일 전송창에 복사된 이메일을 붙여넣고 보내주세요",
    "본인의 이름을 적은 뒤, '업데이트' 버튼을 눌러주세요"
];

export const UPDATE_CHAT_STAGE = {
    desc: "UPDATE_CHAT_STAGE/DESCRIPTION",
    input: "UPDATE_CHAT_STAGE/INPUT_INFO",
    requested: "UPDATE_CHAT_STAGE/REQUESTED",
    updated: "UPDATE_CHAT_STAGE/UPDATED"
};

export const UPDATE_CHAT_CUSTOM_TEMPLATE_TEXTS = {
    [ UPDATE_CHAT_STAGE.requested ]: {
        title: "최근기록으로\n업데이트를 요청했어요!",
        desc: "서버에서 보내주신 카카오톡 채팅기록을 분석중이에요. 잠시만 기다려주세요.",
    },
    [ UPDATE_CHAT_STAGE.updated ]: {
        title: "기록이 업데이트되었어요",
        desc: "아래와 같이 업데이트 작업이 처리되었어요\n혹시나 정상적으로 업데이트되지 않았다면 잠시 후 다시 시도해주세요",
    },
};

export const SUBMIT_EMAIL_ADDR = "submit.milide@gmail.com";