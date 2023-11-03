import styled from "styled-components";
import { FIX_PROBLEM_LIST } from "../../constant";
import ProblemArea from "../components/ProblemArea";
import { useRunLogVersion } from "../../hooks/useFixableProbList";
import { useEffect } from "react";

const S = {
    FixTemplateMain: styled.section`
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.5rem;
    `
}

/**
 * 
 * @param {{
 *  onBtnClick: ( new_stage: string ) => any
 * }} param0 
 * @returns 
 */
const FixTemplateMain = ({ onBtnClick }) => {

    const [ is_ready, { version: latest_version, requested: updated_user } ] = useRunLogVersion();

    return <S.FixTemplateMain>{
        FIX_PROBLEM_LIST.map( ({ createText, text, btn_name, state }) =>
            <ProblemArea 
                problem={ createText ? 
                    !is_ready ? createText( "조회중", "조회중" ) :
                    createText( latest_version, updated_user ) : 
                    text 
                }
                solveBtn={{ btn_name, onClick: () => onBtnClick( state ) }}
            />
        )
    }</S.FixTemplateMain>
}

export default FixTemplateMain;