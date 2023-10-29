import styled from "styled-components";

export const SelectorWrap = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
`;

export const SelectorBlocksWrap = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1.68rem;
    
    & > * {
        flex-grow: 1;
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