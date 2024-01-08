import styled from "styled-components";
import * as C from "../../page/AccountCtrl/constant";

export const SettingFncBtnBox = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    border-radius: 0.5rem;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

    color: ${ ({ type }) =>
        ( type === C.CTRL_BUTTON_IDS.ADD ) ? "#0069A4" :
        ( type === C.CTRL_BUTTON_IDS.REMOVE ) ? "#B60000" :
        "#000000"
    };
    font-weight: 700;
    white-space: nowrap;

    transition: all .1s ease;
    ${ ({ selectable }) => 
        ( !selectable ) ? `
            opacity: 0.5;
            cursor: not-allowed;
        ` : `
            opacity: 1;
            cursor: pointer;
        `
    }
`;