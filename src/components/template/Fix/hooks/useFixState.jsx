import { useState } from "react"
import { FIX_STAGE_VIEWMODES, FIX_TEMPLATE_STAGES } from "../constant";

const sleep = ( tmout ) => 
    new Promise( resolve => 
        setTimeout( () => resolve( true ), tmout ) 
    );

/**
 * FixTemplate에서 문제 해결 stage를 관리하는 custom hook
 * @typedef { FIX_STAGE_VIEWMODES[ keyof FIX_STAGE_VIEWMODES ] } stage_viewmode
 * @typedef { FIX_TEMPLATE_STAGES[ keyof FIX_TEMPLATE_STAGES ] } template_stage
 * @param { number } tmout stage 간 전환 애니메이션을 위한 대기시간 (default: 300)
 * @returns {[
 *  stage_viewmode,
 *  template_stage,
 *  ( new_stage: template_stage ) => template_stage
 * ]}
 */
export const useFixStage = ( tmout = 300,  ) => {
    const [ viewmode, setViewmode ] = useState( FIX_STAGE_VIEWMODES.VISIBLE );
    const [ stage, setStage ] = useState( FIX_TEMPLATE_STAGES.INIT );

    const setFixStage = async ( new_stage ) => {
        setViewmode( FIX_STAGE_VIEWMODES.INVISIBLE );
        await sleep( tmout );
        setStage( new_stage );
        setViewmode( FIX_STAGE_VIEWMODES.VISIBLE );
        return new_stage;
    }

    return [ viewmode, stage, setFixStage ];
}