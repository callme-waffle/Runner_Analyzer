import * as S from "./style";
import * as C from "./constant";

import ServiceButton from "../../../../../atom/ServiceButton";
import { IconArrowRight, IconCopy, IconRotate, IconUser } from "@tabler/icons-react";
import InputBlock from "../../../../../molecule/InputBlock";
import { useState } from "react";
import { useStage } from "../../../hooks/useStage";



const sleep = ( tmout ) => 
    new Promise( resolve => 
        setTimeout( () => resolve( true ), tmout ) 
    );


const FixTemplateUpdateChat = ({  }) => {

    const [ viewmode, stage, setStage ] = useStage( 300, C.UPDATE_CHAT_STAGE.desc )

    const [ name, setName ] = useState("");
    const onRequesterInputed = ( v ) => {
        setName( v );
    }

    const onEmailBtnClick = async ( e ) => {
        window.navigator.clipboard.writeText( C.SUBMIT_EMAIL_ADDR );
        e.currentTarget.innerText = "복사완료!";
        
        await sleep( 300 );
        setStage( C.UPDATE_CHAT_STAGE.input );
    }

    return <S.FixTemplateUpdateChat viewmode={ viewmode }>{
        ( stage === C.UPDATE_CHAT_STAGE.desc ) ? 
            <S.DescriptionArea>
                <S.TextArea>{
                    C.UPDATE_CHAT_HOWTO.map( stage =>
                        <S.TextElement>{ stage }</S.TextElement>
                    )    
                }</S.TextArea>
                <ServiceButton
                    className="copy-email-btn"
                    icon={ <IconArrowRight/> }
                    onClick={ onEmailBtnClick }
                >이메일 복사하고 다음단계로 이동</ServiceButton>
            </S.DescriptionArea>
        : ( stage === C.UPDATE_CHAT_STAGE.input ) ?
        <S.SubmitArea>
            <span className="input-desc-text">업데이트 요청자 이름 입력 후 표시되는 아래 버튼을 눌러주세요</span>
            <InputBlock
                icon={ <IconUser/> }
                type="text"
                placeholder="요청자 이름"
                onValueChange={ onRequesterInputed }
            />
            <ServiceButton
                icon={ <IconRotate/> }
                className={ `update-btn ${ name.length > 0 ? "active" : "deactive" }` }
            >채팅기록 업데이트</ServiceButton>
        </S.SubmitArea>
        : <></>
    }</S.FixTemplateUpdateChat>
}

export default FixTemplateUpdateChat;