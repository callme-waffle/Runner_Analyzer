import styled from "styled-components";
import { ListContentMode } from "../../molecule/BlockList/constant";

export const ListCtrlArea = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc( 1.875rem / ${ ({ mode }) => ( mode === ListContentMode.individual ) ? 1 : 2 });
    align-self: stretch;
`;