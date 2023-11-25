import styled from "styled-components";

export const ServiceCheckBox = styled.div`
    width: 1em;
    height: 1em;

    display: flex;
    align-items: center;

    border-radius: .25rem;
    border: 1px solid ${ ({ active }) => active ? "var( --service-color-B )" : "lightgray" };
    background-color: ${ ({ active }) => active ? "var( --service-color-B )" : "transparent" };

    transition: all .2s ease;
`;