import styled from "styled-components";
import { FIX_STAGE_VIEWMODES } from "./constant";

export const FixTemplateWrap = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 80px 30px 30px 30px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100000;

    & * {
        transition: all .2s cubic-bezier(0, 1, 1, 1);
    }
`;

export const FixTitleArea = styled.section`
    width: 100%;

    & > p {
        color: #FFF;
        font-size: 1.5rem;
        font-weight: 700;
        word-break: keep-all;

        margin: 0;
    }

    & > p.hidden {
        margin-top: -10px;
        opacity: 0;
    }
`;

export const FixUserArea = styled.section`
    width: 100%;
    
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    opacity: ${ ({ viewmode }) => ( viewmode === FIX_STAGE_VIEWMODES.INVISIBLE ) ? "0" : "1" };
    margin-bottom: ${ ({ viewmode }) => ( viewmode === FIX_STAGE_VIEWMODES.INVISIBLE ) ? "-10px" : "0" };

    & > * {
        width: 100%;
    }

    & > .fix-template-ctrl-btn * {
        color: #872424;
        stroke: #872424;
    }
`;