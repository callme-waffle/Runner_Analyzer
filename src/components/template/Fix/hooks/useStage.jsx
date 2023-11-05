import { useState } from "react"
import { FIX_STAGE_VIEWMODES, FIX_TEMPLATE_STAGES } from "../constant";

const sleep = ( tmout ) => 
    new Promise( resolve => 
        setTimeout( () => resolve( true ), tmout ) 
    );

/**
 * stage를 관리하는 custom hook
 * @typedef { FIX_STAGE_VIEWMODES[ keyof FIX_STAGE_VIEWMODES ] } stage_viewmode
 * @typedef { FIX_TEMPLATE_STAGES[ keyof FIX_TEMPLATE_STAGES ] } template_stage
 * @param { number } tmout stage 간 전환 애니메이션을 위한 대기시간 (default: 300)
 * @param { string } init 초기 설정 stage 값
 * @returns {[
 *  stage_viewmode,
 *  template_stage,
 *  ( new_stage: template_stage ) => template_stage
 * ]}
 */
export const useStage = ( tmout = 300, init ) => {
    const [ viewmode, setViewmode ] = useState( FIX_STAGE_VIEWMODES.VISIBLE );
    const [ stage, setStageState ] = useState( init );

    const setStage = async ( new_stage ) => {
        setViewmode( FIX_STAGE_VIEWMODES.INVISIBLE );
        await sleep( tmout );
        setStageState( new_stage );
        setViewmode( FIX_STAGE_VIEWMODES.VISIBLE );
        return new_stage;
    }

    return [ viewmode, stage, setStage ];
}