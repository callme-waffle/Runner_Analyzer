import styled from "styled-components";
import { ServiceBlockBox } from "../../atom/ServiceBlock/style";

export const SelectionBlockArea = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`;

export const SelectionBlockBox = styled( ServiceBlockBox )`

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

export const SelectionListBox = styled.div`
    width: fit-content;
    max-width: 100%;
    padding: 0 .5rem;
    box-sizing: border-box;

    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        display: none;
    }

    & .selection-wrap {
        width: fit-content;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    & .selection-block {
        padding: 0.5rem;
        
        user-select: none;
        cursor: pointer;
    }
`;