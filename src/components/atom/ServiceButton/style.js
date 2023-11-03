import styled from "styled-components";

export const ButtonWrap = styled.div`
    padding: 1.25rem;
    box-sizing: border-box;
    
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    border-radius: 0.625rem;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    
    font-weight: 700;
    user-select: none;

    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: scaleX( 101% ) scaleY( 101% );
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    }
`;