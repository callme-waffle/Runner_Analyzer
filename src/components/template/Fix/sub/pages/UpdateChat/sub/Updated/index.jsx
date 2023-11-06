import * as S from "./style";
import * as L from "./logic";

const UpdateChatUpdated = ({ info }) => {
    

    return <S.UpdatedArea>
        <S.UpdatedLog>
            <span>결과</span>
            <span>{ info.result }</span>
        </S.UpdatedLog>
        <S.UpdatedLog>
            <span>요청시간</span>
            <span>{ L.convertDateToKRText( new Date( info.requested_at ) ) }</span>
        </S.UpdatedLog>
        <S.UpdatedLog>
            <span>보고기록 추출단말</span>
            <span>{ info.device }</span>
        </S.UpdatedLog>
        <S.UpdatedLog>
            <span>기록 버전</span>
            <span>{ info.version }</span>
        </S.UpdatedLog>
    </S.UpdatedArea>
}

export default UpdateChatUpdated;