import * as S from "./style";
import * as C from "./constant";
import * as L from "./logic";

import ServiceButton from "../../../../../atom/ServiceButton";
import { IconArrowRight, IconCopy, IconRotate, IconUser } from "@tabler/icons-react";
import InputBlock from "../../../../../molecule/InputBlock";
import { useCallback, useEffect, useState } from "react";
import { useStage } from "../../../hooks/useStage";
import { useChatUpdateResult } from "./hooks/useChatUpdateResult";
import UpdateChatDescription from "./sub/Description";
import UpdateChatInput from "./sub/Input";
import UpdateChatRequested from "./sub/Requested";
import { FIX_TEMPLATE_CTRLBTN_STATES } from "../../../constant";





/**
 * 
 * @param {{ 
 *  updateTemplateTexts: ( title: string, desc?: string ) => any 
 *  setTemplateBtnVisible: ( is_visible: boolean ) => any 
 * }} param0 
 * @returns 
 */
const FixTemplateUpdateChat = ({ updateTemplateTexts, setTemplateBtnVisible }) => {

    const [ name, setName ] = useState("");
    const [ update_result, requestUpdate ] = useChatUpdateResult();

    const [ viewmode, stage, setStage ] = useStage( 300, C.UPDATE_CHAT_STAGE.desc );
    useEffect(() => {
        const custom_texts= C.UPDATE_CHAT_CUSTOM_TEMPLATE_TEXTS[ stage ];
        if ( !custom_texts ) return;

        updateTemplateTexts( custom_texts.title, custom_texts.desc );
    }, [ stage ]);
    
    useEffect(() => {
        if ( !update_result.requested ) {
            setStage( C.UPDATE_CHAT_STAGE.desc );
            return;
        }

        setStage( C.UPDATE_CHAT_STAGE.updated );
        setTemplateBtnVisible( FIX_TEMPLATE_CTRLBTN_STATES.FINISHED );
    }, [ update_result ]);

    const onRequesterInput = ( v ) => {
        setName( v );
    }
    
    const onInputStageFinish = useCallback( () => {
        requestUpdate( name );
        setStage( C.UPDATE_CHAT_STAGE.requested );
    }, [ name ] );

    return <S.FixTemplateUpdateChat viewmode={ viewmode }>{
        ( stage === C.UPDATE_CHAT_STAGE.desc ) ? 
            <UpdateChatDescription onStageFinish={ () => setStage( C.UPDATE_CHAT_STAGE.input ) }/>
        : ( stage === C.UPDATE_CHAT_STAGE.input ) ? 
            <UpdateChatInput onRequesterInput={ onRequesterInput } onStageFinish={ onInputStageFinish } />
        : ( stage === C.UPDATE_CHAT_STAGE.requested ) ? 
            <UpdateChatRequested onload={ () => setTemplateBtnVisible( FIX_TEMPLATE_CTRLBTN_STATES.INVISIBLE ) }/>
        : ( stage === C.UPDATE_CHAT_STAGE.updated ) ? <></>
        : <></>
    }</S.FixTemplateUpdateChat>
}

export default FixTemplateUpdateChat;