import styled from "styled-components";

export const SelectionListArea = styled.div`
    width: fit-content;
    max-width: 100%;
    height: 2.5rem;
    padding: 0 .5rem;
    box-sizing: border-box;

    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    overflow-x: auto;
    overflow-y: hidden;

    transition: all .2s ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &.selection-close {
        height: 0;
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

        white-space: nowrap;
        
        user-select: none;
        cursor: pointer;
    }
`;