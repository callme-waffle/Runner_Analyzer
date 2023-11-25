import styled from "styled-components";
import { SERVICE_BLOCK_TYPE } from "./constant";
import { BlockOpenKeyframe } from "./keyframe";

export const ServiceBlockBox = styled.div`
    padding: 1.25rem 1.875rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-radius: 0.625rem;
    background: ${ ({ type }) =>
        ( type === SERVICE_BLOCK_TYPE.INPUT ) ? "#D9D9D9" :
        "#ffffff"
    };
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;

    font-weight: 700;

    cursor: pointer;
    transition: all .2s ease;

    animation: ${ ({ animate }) => ( animate ) ? BlockOpenKeyframe : "" } .2s cubic-bezier(0, 1, 1, 1) both;

    &.select {
        border: 1px solid var( --service-color-B );
    }

    & > .log-keys-area {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
    }

    & > .log-value-area {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
    }
`;

