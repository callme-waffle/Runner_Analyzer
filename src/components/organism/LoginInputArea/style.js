import styled from "styled-components";
import { LoginInputAreaOpenKeyframe } from "./keyframe";

export const LoginInputArea = styled.section`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    animation: ${ LoginInputAreaOpenKeyframe } .5s ease both;

    &.invisible {
        height: 0;
        padding: 0;
    }

    & > .login-button {
        width: 100%;
        
        transition: all .2s cubic-bezier( 0, 1, 1, 1 );
        overflow: hidden;
        
        &.invisible {
            height: 0;
            padding: 0;
        }
    }
`;