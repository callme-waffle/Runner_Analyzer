import { HTLMAttributes, HTMLDivElement } from "react";

import * as S from "./style";

/**
 * 
 * @param {{ icon: TablerIconComponent, children: any } & HTLMAttributes<HTMLDivElement>} param0 
 * @returns 
 */
const ServiceButton = ({ icon, children, ...props }) => {
    return <S.ButtonWrap { ...props }>
        { icon || <></> }
        { children }
    </S.ButtonWrap>
}

export default ServiceButton;