import styled from "styled-components";

import { FIX_STAGE_VIEWMODES } from "../../../constant";

export const FixTemplateUpdateChat = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3em;

    ${ ({ viewmode }) =>
        ( viewmode === FIX_STAGE_VIEWMODES.INVISIBLE ) ? `
            opacity: 0;
            margin-bottom: -10px;
        ` : `
            opacity: 1;
        `
    }

    & > .copy-email-btn {
        width: 100%;
    }
`;
export const DescriptionArea = styled.section`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 2em;
`;
export const TextArea = styled.ol`
    width: 100%;
    margin: 0;
    padding-left: 1em;

    display: flex;
    flex-direction: column;
    gap: 1em;
`;
export const TextElement = styled.li`
    font-size: 1em;
    font-weight: 400;
    color: white;
    word-break: keep-all;
`;
export const SubmitArea = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1em;

    & > .input-desc-text {
        font-size: 1.2em;
        font-weight: 400;
        color: white;
        word-break: keep-all;
    }

    & > .update-btn {
        overflow: hidden;
        transition: all .2s cubic-bezier(0, 1, 1, 1);
        
        &.deactive {
            height: 0;
            padding: 0;
            opacity: 0;
        }
    }
`;