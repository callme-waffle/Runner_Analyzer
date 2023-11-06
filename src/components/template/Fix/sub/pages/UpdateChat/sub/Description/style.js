import styled from "styled-components";

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