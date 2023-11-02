import styled from "styled-components";
import { ServiceBlockBox } from "../../atom/ServiceBlock/style";

export const InputBlockBox = styled( ServiceBlockBox )`

    width: 100%;
    ${ ({ isMobile }) => ( isMobile ) ? `
        padding: 0.62rem 1rem;
    ` : `` }

    justify-content: flex-start;
    gap: 10px;

    position: relative;

    overflow: hidden;
    transition: all .2s ease;

    input {
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;

        font-size: 1rem;
        font-weight: 500;
    }
`;

export const InputMsgText = styled.span`
    font-size: 1em;
    font-weight: 500;
    color: #aa0808;

    text-align: right;

    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
`;