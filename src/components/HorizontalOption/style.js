import styled from "styled-components";

export const StyledHorizontalOptionSelector = styled.div`
    padding: 10px 20px;
    box-sizing: border-box;

    background-color: lightgray;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;

    & * {
        transition: all .1s ease;
        user-select: none;
    }

    & > .hor-option {
        padding: 10px;
        box-sizing: border-box;

        font-size: 1em;
        white-space: nowrap;

        margin-right: 20px;
        
        background-color: lightgray;
        border-radius: 10px;

        transition: all .2s ease;

        cursor: pointer;

        &:last-child, &.closed.selected {
            margin-right: 0;
        }

        &:hover, &.selected {
            font-size: 1.05em;
            font-weight: 700;
            color: white;
            
            background-color: #383838;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        &.closed:not(.selected) {
            width: 0;
            height: 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }
    }
`;