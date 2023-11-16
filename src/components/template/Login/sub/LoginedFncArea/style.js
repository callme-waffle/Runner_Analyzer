import styled from "styled-components";

export const LoginedFncArea = styled.section`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    &.invisible {
        height: 0;
        padding: 0;
    }

    & > .logined-fnc-button {
        width: 100%;

        &.logout-button {
            color: var( --service-color-alert );
            stroke: var( --service-color-alert );
        }
    }
`;