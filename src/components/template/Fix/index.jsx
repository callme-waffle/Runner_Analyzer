import * as S from "./style";
import { IconArrowLeft, IconX } from "@tabler/icons-react";

import { useAnimTextState } from "./hooks/useAnimTextState";
import { useStage } from "./hooks/useStage";

import FixTemplateMain from "./sub/pages/Main";
import ServiceButton from "../../atom/ServiceButton";

import { FIX_TEMPLATE_DESCS, FIX_TEMPLATE_STAGES, FIX_TEMPLATE_TITLES } from "./constant";
import { useCallback } from "react";
import FixTemplateUpdateChat from "./sub/pages/UpdateChat";

const FixTemplate = () => {
    
    const [ viewmode, fix_stage, setFixStage ] = useStage( 300, FIX_TEMPLATE_STAGES.INIT );
    const [ is_title_visible, title ] = useAnimTextState( fix_stage, FIX_TEMPLATE_TITLES );
    const [ is_desc_visible, desc ] = useAnimTextState( fix_stage, FIX_TEMPLATE_DESCS );

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
                    <FixTemplateUpdateChat/> :
                ( fix_stage === FIX_TEMPLATE_STAGES.ADD_LOG ) ? 
                    <FixTemplateMain onBtnClick={ onSolveBtnClick }/> :
                <FixTemplateMain onBtnClick={ onSolveBtnClick }/>
            }
            { 
                ( fix_stage !== FIX_TEMPLATE_STAGES.INIT ) ? 
                    <ServiceButton className="fix-template-ctrl-btn" icon={ <IconArrowLeft/> }
                        onClick={ onBottomBtnClick }
                    >뒤로</ServiceButton> :
                    <ServiceButton className="fix-template-ctrl-btn" icon={ <IconX/> }
                        onClick={ onBottomBtnClick }
                    >닫기</ServiceButton>
            }
        </S.FixUserArea>
    </S.FixTemplateWrap>
}

export default FixTemplate;