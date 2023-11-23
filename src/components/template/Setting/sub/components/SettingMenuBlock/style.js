import styled from "styled-components";

export const SettingMenuBlockWrap = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;
    transition: all .2s ease;

    border: transparent;

    &:hover {
        border-radius: 2em;
        border: 1px solid lightgray;
    }
`;

export const MenuBlockTextArea = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    flex: 1 0 0;

    & > h1 {
        margin: 0;

        font-size: 1.5rem;
        font-weight: 700;
    }
    
    & > span {        
        margin: 0;
    
        font-size: 1rem;
        font-weight: 700;

        opacity: .5;
    }
`;