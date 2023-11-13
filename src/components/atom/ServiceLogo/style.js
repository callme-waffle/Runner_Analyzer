import styled from "styled-components";

export const LogoWrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & * {
        transition: all .2s cubic-bezier(0, 1, 1, 1);
        user-select: none;
    }
`;

export const LogoTitle = styled.h1`
    margin: 0;

    font-family: LeonSans;
    font-size: 2rem;
    font-weight: 700;

    background: linear-gradient(90deg, var(--service-color-B) 3.51%, var(--service-color-B-half) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const LogoDesc = styled.section`
    font-size: ${ ({ isMobile }) => isMobile ? "1em" : "1.5em" };
    color: var( --service-color-${ ({ isMobile }) => isMobile ? "B" : "C" } );
    text-align: center;
    font-family: Noto Sans KR;
    font-weight: 500;

    display: flex;
    flex-direction: ${ ({ isMobile }) => isMobile ? "column" : "row" };
    align-items: center;
    gap: 0.25em;

    & > span {
        margin: 0;
    }
`;