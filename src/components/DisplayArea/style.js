import styled from "styled-components";


export const StyledDisplayArea = styled.section`
    width: 100%;
    height: 100%;

    position: relative;
    
    display: grid;
    grid-template-rows: calc( 40px + ( 1em * 1.2 ) ) auto;
    gap: 20px;

    overflow: hidden;

    & > .uname-input {
        width: 100%;
    }
`;

export const StyledSelectionArea = styled.section`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const StyledListArea = styled.section`
    width: 100%;
    height: 100%;

    position: relative;

    display: grid;
    grid-template-rows: calc( 20px + 2em + ( 1.2 * 1.25em ) ) auto;
    
    & > .list-area {
        width: 100%;
        max-height: 100%;

        position: relative;

        overflow-y: auto;
    }

    & ul {
        list-style: none;

        width: calc( 100% - 20px );
        padding: 10px 20px;
        box-sizing: border-box;

        position: relative;
        left: 50%;
        transform: translate(-50%);

        display: flex;
        align-items: center;

        &.title-row {
            background-color: white;
            border-radius: 20px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

            & li {
                font-size: 1.25em;
                font-weight: 700;

                border-right: 1px solid black;

                &:last-child {
                    border-right: none;
                }
            }
        }
    }

    & li {
        height: fit-content;

        text-align: center;
        user-select: none;

        &:first-child {
            cursor: pointer;
        }
        ${ ({ cols_gap }) => 
            cols_gap.map( (gap, i) => `
                &:nth-child(${ i+1 }) {
                    width: ${ gap };
                }
            ` )
            .reduce( (a, b) => a + b, "" )
        }
    }
`;