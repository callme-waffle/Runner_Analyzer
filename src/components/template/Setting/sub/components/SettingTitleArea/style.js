import styled from "styled-components";

export const SettingTitleArea = styled.section`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

    color: var( --service-color-B );

    & * {
        transition: all .2s ease;
        user-select: none;
    }

    & > * {
        cursor: pointer;
    }

    & > h1 {
        margin: 0 !important;
        font-size: 1.5rem;

        opacity: ${ ({ curr_visible }) => curr_visible ? "1" : "0" };
        margin-bottom: ${ ({ curr_visible }) => curr_visible ? "100px" : "0" };
    }

    & > .prev {
        display: flex;
        gap: ${ ({ prev_visible }) => prev_visible ? ".5rem" : "0" };;
        
        height: ${ ({ prev_visible }) => prev_visible ? "1.5rem" : "0" };
        opacity: ${ ({ prev_visible }) => prev_visible ? "1" : "0" };
        margin-bottom: ${ ({ prev_visible }) => prev_visible ? "-5px" : "0" };

        overflow: hidden;

        font-size: 1rem;
        line-height: 1.5rem;

        & > h3 { 
            margin: 0;
            height: fit-content;
            
            font-weight: 300;
        }
    }
`;