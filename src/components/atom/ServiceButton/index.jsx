import * as S from "./style";

const ServiceButton = ({ icon, children }) => {
    return <S.ButtonWrap>
        { icon || <></> }
        { children }
    </S.ButtonWrap>
}

export default ServiceButton;