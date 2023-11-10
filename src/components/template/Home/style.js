import styled from "styled-components";


export const HomeTemplateWrap = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 40px 20px 20px 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;

    display: grid;
    grid-template-rows: 4.35rem auto 3.5rem;
    grid-template-columns: 100%;

    overflow: hidden;

    & > .home-probbtn {
        width: 100%;
    }
`;

export const HomeTitleArea = styled.section`
    margin-left: 10px;

    color: #000;
    font-family: Noto Sans KR;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    & * {
        margin: 0;
    }
`;

export const HomeContentArea = styled.section`
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;

    
    & > .home-viewlist {
        height: calc( 100% - 7rem );
    }

    & > * {
        width: 100%;
    }
`;