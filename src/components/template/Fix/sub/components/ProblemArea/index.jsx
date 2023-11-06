
import { useMemo } from "react";
import ServiceButton from "../../../../../atom/ServiceButton";
import * as S from "./style";
import { IconRotate } from "@tabler/icons-react";

/**
 * 
 * @param {{
 *  problem: string,
 *  solveBtn: { btn_name: string, onClick: ( new_stage: string ) => any }
 * }} param0 
 * @returns 
 */
const ProblemArea = ({ problem, solveBtn: { btn_name, btn_icon, onClick } }) => {
    return <S.ProblemAreaWrap>
        <S.ProblemTextArea>{
            problem.split("\n").map( ( t, i ) => 
            <p>{ t }</p> )
        }</S.ProblemTextArea>
        <S.ProblemSolveBtnArea>
            <ServiceButton className="prob-solve-btn" 
                onClick={ onClick }
                icon={ btn_icon || <IconRotate/> }
            >{ btn_name }</ServiceButton>
        </S.ProblemSolveBtnArea>
    </S.ProblemAreaWrap>
}

export default ProblemArea;