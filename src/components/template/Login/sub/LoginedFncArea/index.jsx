import { IconHome, IconLogout } from "@tabler/icons-react";
import ServiceButton from "../../../../atom/ServiceButton";
import * as S from "./style";

const LoginedFncArea = ({ onLogoutBtnClick }) => {

    const onHomeBtnClick = () => {
        window.location.href = "/";
    }

    return <S.LoginedFncArea>
        <ServiceButton 
            className={ `logined-fnc-button home-button` } 
            icon={ <IconHome/> }
            onClick={ onHomeBtnClick }
        >홈으로 이동</ServiceButton>
        <ServiceButton 
            className={ `logined-fnc-button logout-button` } 
            icon={ <IconLogout/> }
            onClick={ onLogoutBtnClick }
        >로그아웃</ServiceButton>
    </S.LoginedFncArea>
}

export default LoginedFncArea;