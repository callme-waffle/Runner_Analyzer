import styled from "styled-components";
import { FIX_STAGE_VIEWMODES } from "./constant";
import { fixTemplateClose, fixTemplateOpen } from "./keyframe";

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

    overflow: hidden;
    
    & * {
        transition: all .2s cubic-bezier(0, 1, 1, 1);
    }

    animation-duration: .2s;
    animation-fill-mode: both;
    &.active {
        animation-name: ${ fixTemplateOpen };
    }
    &.deactive {
        animation-name: ${ fixTemplateClose };
    }
`;

export const FixTextAreaWrap = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    & > .title {
        font-size: 1.5rem;
        font-weight: 700;
    }

    & > .desc {
        font-size: 1rem;
        font-weight: 400;
    }
`;

export const FixTextArea = styled.section`
    width: 100%;

    & > p {
        color: #FFF;
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

    & > .fix-template-ctrl-btn {

        &:not( .btn-finish ) * {
            color: var( --service-color-alert );
            stroke: var( --service-color-alert );
        }

        overflow: hidden;
        &.btn-invisible {
            height: 0;
            padding: 0;
        }
        &.btn-finish {
            color: #248741;
            stroke: #248741;
        }
    }
`;