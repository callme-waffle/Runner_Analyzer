
import * as S from "./style";

import backgroundImage from "../../../assets/images/undraw_fitness_stats_sht6.svg";

import ServiceLogo from "../../atom/ServiceLogo";
import LoginInputArea from "../../organism/LoginInputArea";
import { useLoginRequest } from "./hooks/useLoginRequest";

const LoginTemplate = () => {

    const [ is_logined, is_login_requested, logined_info, login ] = useLoginRequest();

    return <S.LoginTemplateWrap>
        <S.BackgroundArea src={ backgroundImage }></S.BackgroundArea>
        <S.TitleArea>
            <ServiceLogo/>
        </S.TitleArea>
        <S.LoginArea>
            <S.LoginTextArea>
                <h3>환영합니다!</h3>
                <S.LoginDescArea>
                    <span>부대 식별코드와 사용자 이름을</span>
                    <span>입력해주세요 =)</span>
                </S.LoginDescArea>
            </S.LoginTextArea>
            <LoginInputArea 
                isInputActive={ is_login_requested }
                onLoginButtonClick={ login }
            />
        </S.LoginArea>
    </S.LoginTemplateWrap>
}

export default LoginTemplate;