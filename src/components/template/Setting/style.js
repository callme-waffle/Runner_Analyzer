import styled from "styled-components";

import background from "../../../assets/images/undraw_fitness_stats_sht6.svg";

export const SettingTemplateWrap = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 40px 20px;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const SettingTemplateBackground = styled.div`
    width: 150vw;
    height: 50vh;

    position: fixed;
    bottom: 40px;
    right: 0;

    background: url( ${ background } );
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    z-index: -1;
`;