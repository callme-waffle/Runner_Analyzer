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

