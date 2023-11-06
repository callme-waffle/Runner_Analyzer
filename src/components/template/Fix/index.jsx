import * as S from "./style";
import { IconArrowLeft, IconCheck, IconX } from "@tabler/icons-react";

import { useAnimTextState } from "./hooks/useAnimTextState";
import { useStage } from "./hooks/useStage";

import FixTemplateMain from "./sub/pages/Main";
import ServiceButton from "../../atom/ServiceButton";

import { FIX_TEMPLATE_CTRLBTN_STATES, FIX_TEMPLATE_DESCS, FIX_TEMPLATE_STAGES, FIX_TEMPLATE_TITLES } from "./constant";
import { useCallback, useState } from "react";
import FixTemplateUpdateChat from "./sub/pages/UpdateChat";

const FixTemplate = () => {
    
    const [ viewmode, fix_stage, setFixStage ] = useStage( 300, FIX_TEMPLATE_STAGES.INIT );
    const [ tbtn_state, setTBtnState ] = useState( FIX_TEMPLATE_CTRLBTN_STATES.VISIBLE );

    const [ is_title_visible, title, setCustomTitle ] = useAnimTextState( fix_stage, FIX_TEMPLATE_TITLES );
    const [ is_desc_visible, desc, setCustomDesc ] = useAnimTextState( fix_stage, FIX_TEMPLATE_DESCS );

    const updateTemplateTexts = ( new_title, new_desc ) => {
        setCustomTitle( new_title );
        setCustomDesc( new_desc );
    }

    const updateFixTemplateBtnState = ( btn_state ) => {
        setTBtnState( btn_state );
    }

    const onSolveBtnClick = ( new_stage ) => {
        setFixStage( new_stage );
    }

    const onBottomBtnClick = useCallback(() => {
        switch( fix_stage ) {
            case FIX_TEMPLATE_STAGES.INIT:
                // close
                return;
            default:
                return setFixStage( FIX_TEMPLATE_STAGES.INIT );
        }
    }, [ fix_stage ]);

    const onFixFinished = () => {
        window.location.reload();
    }

    return <S.FixTemplateWrap>
        <S.FixTextAreaWrap>
            <S.FixTextArea className="title">{ 
                title.split("\n")
                .map( ( t, i ) => 
                    <p className={ !is_title_visible ? "hidden" : "" }
                        style={{ transitionDelay: `${ i * 0.01 }s` }}
                    >{ t }</p> 
                )
            }</S.FixTextArea>
            <S.FixTextArea className="desc">{ 
                desc.split("\n")
                .map( ( t, i ) => 
                    <p className={ !is_desc_visible ? "hidden" : "" }
                        style={{ transitionDelay: `${ i * 0.01 }s` }}
                    >{ t }</p> 
                )
            }</S.FixTextArea>
        </S.FixTextAreaWrap>
        <S.FixUserArea viewmode={ viewmode }>
            {
                ( fix_stage === FIX_TEMPLATE_STAGES.UPDATE_CHAT ) ? 
                    <FixTemplateUpdateChat 
                        updateTemplateTexts={ updateTemplateTexts }
                        setTemplateBtnVisible={ updateFixTemplateBtnState }
                    /> :
                ( fix_stage === FIX_TEMPLATE_STAGES.ADD_LOG ) ? 
                    <FixTemplateMain onBtnClick={ onSolveBtnClick }/> :
                <FixTemplateMain onBtnClick={ onSolveBtnClick }/>
            }
            {
                ( tbtn_state === FIX_TEMPLATE_CTRLBTN_STATES.VISIBLE ) ?
                    <ServiceButton 
                        className="fix-template-ctrl-btn btn-visible"
                        icon={ ( fix_stage !== FIX_TEMPLATE_STAGES.INIT ) ? <IconArrowLeft/> : <IconX/> }
                        onClick={ onBottomBtnClick }
                    >{ ( fix_stage !== FIX_TEMPLATE_STAGES.INIT ) ? "뒤로" : "닫기" }</ServiceButton> :
                ( tbtn_state === FIX_TEMPLATE_CTRLBTN_STATES.INVISIBLE ) ?
                    <ServiceButton 
                        className="fix-template-ctrl-btn btn-invisible"
                        icon={ <IconArrowLeft/> }
                    >뒤로</ServiceButton> :
                ( tbtn_state === FIX_TEMPLATE_CTRLBTN_STATES.FINISHED ) ?
                    <ServiceButton 
                        className="fix-template-ctrl-btn btn-finish"
                        icon={ <IconCheck/> }
                        onClick={ onFixFinished }
                    >완료</ServiceButton> :
                <></>
            }
        </S.FixUserArea>
    </S.FixTemplateWrap>
}

export default FixTemplate;