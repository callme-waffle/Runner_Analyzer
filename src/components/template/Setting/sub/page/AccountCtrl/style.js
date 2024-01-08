import styled from "styled-components";

export const SettingAccountCtrlArea = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
`;

export const FncCtrlArea = styled.section`
    width: 100%;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
`;

export const CURDBtnArea = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > .curdbtn-area {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`;

export const AccountBtnArea = styled.section`
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    
    & > .accbtn-area {
        display: flex;
        align-items: flex-start;
        gap: 24px;
        flex: 1 0 0;
    }

    & .accountbtn {
        width: 100%;

        &.admin-priv-ctrl-btn {
            color: #146217;
        }
    }
`;

export const MsgArea = styled.section`
    width: 100%;
`;

export const UserListArea = styled.section`
    width: calc( 100% + 2rem );
    height: auto;
    padding: 1rem;
    box-sizing: border-box;

    position: relative;
    left: 50%;
    transform: translate(-50%);

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;

    overflow-y: auto;
`;

export const UserListWrap = styled.section`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    & > * {
        width: 100%;
    }
`;
