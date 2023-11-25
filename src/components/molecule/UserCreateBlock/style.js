import styled from "styled-components";

export const UserCreateBlockWrap = styled.span`
    .log-value-area {
        flex-direction: row-reverse !important;
    }
`;

export const UserCreateBlockInput = styled.input`
    font-size: 1em;
    color: #000;
    
    outline: none;
    border: none;
    background-color: transparent;

    border: 0px solid transparent;
    transition: all .2s ease;

    &:valid {
        border-bottom: 2px solid var( --service-color-B );
    }
    &:invalid {
        border-bottom: 2px solid var( --service-color-alert );
    }

    .log-keys-area > & {
        width: 50%;
        text-align: left;
        font-weight: 700;
    }

    .log-value-area > & {
        width: 80%;
        text-align: right;
        font-weight: normal;
    }
`;