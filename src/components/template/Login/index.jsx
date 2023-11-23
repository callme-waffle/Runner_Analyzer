
import * as S from "./style";

import backgroundImage from "../../../assets/images/undraw_fitness_stats_sht6.svg";

import ServiceLogo from "../../atom/ServiceLogo";

import LoginInputArea from "./sub/LoginInputArea";
import LoginedFncArea from "./sub/LoginedFncArea";

import { useLoginState } from "./hooks/useLoginState";
import { useLoginTitleState } from "./hooks/useLoginTitleState";
import { useDelay } from "../../../hooks/useDelay";

const LoginTemplate = () => {

    const { status: { is_logined, active_input }, data, fnc: { login, logout } } = useLoginState();
    const [ is_logined_delay, is_applied ] = useDelay( is_logined, 300 );

    const {
        title: { text: title, color: title_color, display: title_display },
        desc: { text: desc, color: desc_color, display: desc_display }
    } = useLoginTitleState( is_logined, data );

    return <S.LoginTemplateWrap>
        <S.BackgroundArea src={ backgroundImage }></S.BackgroundArea>
        <S.TitleArea>
            <ServiceLogo/>
        </S.TitleArea>
        <S.LoginArea>
            <S.LoginTextArea color={ title_color } opacity={ title_display }>
                <h3>{ title }</h3>
                <S.LoginDescArea color={ desc_color } opacity={ desc_display }>{
                    desc.split("\n").map( v => <span>{ v }</span> )
                }</S.LoginDescArea>
            </S.LoginTextArea>
            <S.LoginControlArea display={ is_applied }>{
                ( is_logined_delay ) ? 
                    <LoginedFncArea user={ data?.user } onLogoutBtnClick={ logout }/> :
                    <LoginInputArea isInputActive={ active_input } onLoginButtonClick={ login } />
            }</S.LoginControlArea>
        </S.LoginArea>
    </S.LoginTemplateWrap>
}

export default LoginTemplate;