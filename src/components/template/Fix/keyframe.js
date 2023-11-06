import { keyframes } from "styled-components";

export const fixTemplateOpen = keyframes`
    from {
        display: none;
        opacity: 0;
        height: 0;
    }
    1% { opacity: 0; height: 100vh; margin-top: -10px; }
    to { opacity: 1; }
`;

export const fixTemplateClose = keyframes`
    from { opacity: 1; }
    99% { opacity: 0; height: 100vh; margin-top: -10px; }
    to {
        display: none;
        opacity: 0;
        height: 0;
    }
`;