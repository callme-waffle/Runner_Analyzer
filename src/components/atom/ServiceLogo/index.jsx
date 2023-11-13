import * as S from "./style";

const ServiceLogo = ({ isMobile = true }) => {
    return <S.LogoWrap isMobile={ isMobile }>
        <S.LogoTitle>Run:log</S.LogoTitle>
        <S.LogoDesc isMobile={ isMobile }>
            <span>부대 뜀걸음기록</span>
            <span>종합시스템</span>
        </S.LogoDesc>
    </S.LogoWrap>
}

export default ServiceLogo;