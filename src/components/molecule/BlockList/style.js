import styled from "styled-components";


export const BlockListWrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex-shrink: 0;

    & > .list-title {
        font-size: 1.25rem;
        font-weight: 700;
    }
`;

export const BlockList = styled.section`
    padding: 0.625rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 0.625rem;
    flex: 1 0 0;
`;