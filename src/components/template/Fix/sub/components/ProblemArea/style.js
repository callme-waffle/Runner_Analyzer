import styled from "styled-components";

export const ProblemAreaWrap = styled.section`
    width: 100%;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
`;

export const ProblemTextArea = styled.section`
    width: 100%;

    & > p {
        color: #FFF;
        font-size: 1rem;
        word-break: keep-all;

        margin: 0;
    }
`;
export const ProblemSolveBtnArea = styled.section`
    width: 100%;
    height: fit-content;

    & > .prob-solve-btn {
        width: 100%;
    }
`;