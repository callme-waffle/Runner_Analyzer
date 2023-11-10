import * as S from "./style";
import * as ParentC from "../../constant";

import util from "../../../../../../../../util";

import ServiceButton from "../../../../../../../atom/ServiceButton";
import { IconArrowRight } from "@tabler/icons-react";



const UpdateChatDescription = ({ onStageFinish }) => {

    const onEmailBtnClick = async ( e ) => {
        window.navigator.clipboard.writeText( ParentC.SUBMIT_EMAIL_ADDR );
        e.currentTarget.innerText = "복사완료!";
        
        await util.sleep( 300 );
        onStageFinish();
    }

    return <S.DescriptionArea>
        <S.TextArea>{
            ParentC.UPDATE_CHAT_HOWTO.map( stage =>
                <S.TextElement>{ stage }</S.TextElement>
            )    
        }</S.TextArea>
        <ServiceButton
            className="copy-email-btn"
            icon={ <IconArrowRight/> }
            onClick={ onEmailBtnClick }
        >이메일 복사하고 다음단계로 이동</ServiceButton>
    </S.DescriptionArea>
}
export default UpdateChatDescription;