import styled from "styled-components";
import { SERVICE_BLOCK_TYPE } from "./constant";

export const ServiceBlockBox = styled.div`
    width: 24.375rem;
    padding: 1.25rem 1.875rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-radius: 0.625rem;
    background: ${ ({ type }) =>
        ( type === SERVICE_BLOCK_TYPE.INPUT ) ? "#D9D9D9" :
        "#ffffff"
    };
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

    font-weight: 700;

    cursor: pointer;

    & > .log-keys-area {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;

        user-select: none;
    }

    & > .log-value-area {
        display: flex;
        align-items: flex-start;
        gap: 0.625rem;
    }
`;

