import * as S from "./style";

import { useTitleState } from "./hooks/useTitleState";

import FixTemplateMain from "./sub/pages/main";
import ServiceButton from "../../atom/ServiceButton";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import { useFixStage } from "./hooks/useFixState";
import { FIX_TEMPLATE_STAGES } from "./constant";
import { useCallback } from "react";

const FixTemplate = () => {
    
    const [ viewmode, fix_stage, setFixStage ] = useFixStage();
    const [ is_title_visible, title ] = useTitleState( fix_stage );

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
        <S.FixTitleArea>{ 
            title.split("\n")
            .map( ( t, i ) => 
                <p className={ !is_title_visible ? "hidden" : "" }
                    style={{ transitionDelay: `${ i * 0.01 }s` }}
                >{ t }</p> 
            )
        }</S.FixTitleArea>
        <S.FixUserArea viewmode={ viewmode }>
            {
                ( fix_stage === FIX_TEMPLATE_STAGES.UPDATE_CHAT ) ? 
                    <FixTemplateMain onBtnClick={ onSolveBtnClick }/> :
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