import styled from "styled-components";

export const BlockWrap = styled.div`
    &.viewmode-mobile {
        padding: 0.625rem 1rem;

        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 1.25rem;

        background-color: transparent;
        border-radius: 0.625rem;

        font-style: normal;
        font-weight: 500;
        line-height: normal;

        transition: all .5s ease;
        
        cursor: pointer;
        user-select: none;

        &.active {
            background: #FFF;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
        }
    }
`;