import styled from "styled-components";


export const StyledDisplayArea = styled.section`
    width: 100%;
    height: 100%;

    position: relative;
    
    display: grid;
    grid-template-rows: calc( 40px + ( 1em * 1.2 ) ) auto;
    gap: 20px;

    overflow: hidden;

    & > .uname-input {
        width: 100%;
    }
`;