import styled from "styled-components";


export const BlockListWrap = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex-shrink: 0;

    & > .list-title {
        font-size: 1.25rem;
        font-weight: 700;
    }

    & .list-block {
        width: 100%;
    }
`;

export const BlockList = styled.section`
    height: calc( 100% - 6rem );
    padding: 0.625rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 0.625rem;
    flex: 1 0 0;

    overflow-y: auto;
`;