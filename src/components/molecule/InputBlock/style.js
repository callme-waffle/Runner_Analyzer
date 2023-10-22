import styled from "styled-components";
import { ServiceBlockBox } from "../../atom/ServiceBlock/style";

export const InputBlockBox = styled( ServiceBlockBox )`

    ${ ({ isMobile }) => ( isMobile ) ? `
        padding: 0.62rem 1rem;
    ` : `` }

    input {
        background-color: transparent;
        outline: none;
        border: none;

        font-size: 1rem;
        font-weight: 500;
    }
`;