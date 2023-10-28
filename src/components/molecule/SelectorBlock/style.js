import styled from "styled-components";
import { ServiceBlockBox } from "../../atom/ServiceBlock/style";

export const SelectorBlockArea = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    & * {
        white-space: nowrap;
    }
`;

export const SelectorBlockBox = styled( ServiceBlockBox )`
    width: 100%;
    ${ ({ isMobile }) => ( isMobile ) ? `
        padding: 0.62rem 1rem;
    ` : `` }

    & > .log-keys-area {
        opacity: 0.5;
    }

    input {
        background-color: transparent;
        outline: none;
        border: none;

        font-size: 1rem;
        font-weight: 500;
    }
`;