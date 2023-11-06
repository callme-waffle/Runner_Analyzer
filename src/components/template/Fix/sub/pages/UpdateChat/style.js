import styled from "styled-components";

import { FIX_STAGE_VIEWMODES } from "../../../constant";

export const FixTemplateUpdateChat = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3em;

    ${ ({ viewmode }) =>
        ( viewmode === FIX_STAGE_VIEWMODES.INVISIBLE ) ? `
            opacity: 0;
            margin-bottom: -10px;
        ` : `
            opacity: 1;
        `
    }

    & > .copy-email-btn {
        width: 100%;
    }
`;