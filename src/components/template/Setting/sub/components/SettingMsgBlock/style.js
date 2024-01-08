import styled from "styled-components";

export const SettingMsgBlock = styled.div`
    width: 100%;
    height: ${ ({ visible }) => visible ? "fit-content" : "0" };
    padding: ${ ({ visible }) => visible ? "1rem" : "0" };
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;

    background-color: var(--service-color-warn);
    border-radius: 1rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    opacity: ${ ({ visible }) => visible ? "1" : "0" };

    color: white;
    font-size: 1em;
    font-weight: 500;
    white-space: nowrap;

    text-overflow: ellipsis;
    overflow: hidden;

    transition: all .2s ease;
`;