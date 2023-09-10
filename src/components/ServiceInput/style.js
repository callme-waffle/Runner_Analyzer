import styled from "styled-components";

export const StyledServiceInput = styled.div`
    width: 100%;
    
    padding: 20px 30px;
    box-sizing: border-box;
    
    background-color: lightgray;
    border-radius: 10px;
    
    transition: all .2s ease;
    
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    & > input {
        font-size: 1em;
        font-weight: 500;
        border: none;
        outline: none;
        background: none;

        width: 100%;
        height: 100%;

    }

    &:focus-within {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0),
                    inset 0 0 5px rgba(0, 0, 0, 0.35);
    }
`;