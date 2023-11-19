import styled from "styled-components";

export const LoginTemplateWrap = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 40px 20px;
    box-sizing: border-box;  

    position: absolute;
`;

export const BackgroundArea = styled.section`
    width: 100vw;
    height: 50vh;

    position: fixed;
    bottom: 0;
    right: 0;

    background-image: url( ${ ({ src }) => src } );
    background-size: cover;
    background-position-x: -50vw;
`;

export const TitleArea = styled.section`

    & > h1 {
        font-size: 1.5rem;
        font-weight: 700;

        margin: 0;
    }
`;

export const LoginArea = styled.section`
    width: calc( 100vw - 40px );
    min-height: 50vw;
    padding: 2.5em;
    box-sizing: border-box;

    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.30);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
`;

export const LoginTextArea = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    & * {
        color: ${ ({ color }) => color };
        opacity: ${ ({ opacity }) => opacity ? "1" : "0" };
        text-align: center;
        transition: all .2s ease;
    }

    & > h3 {
        margin: 0;

        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const LoginDescArea = styled.section`
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;

    display: flex;
    flex-direction: column;
    align-items: center;

    & * {
        color: ${ ({ color }) => color };
        opacity: ${ ({ opacity }) => opacity ? "1" : "0" };
        text-align: center;
    }
`;

export const LoginControlArea = styled.section`
    width: 100%;
    height: 100%;

    opacity: ${ ({ display }) => ( display ) ? "1" : "0" };
    
    transition: all .2s ease;
`;