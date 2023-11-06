import styled from "styled-components";

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

        &.clicked {
            opacity: 0.3;
        }
    }
`;