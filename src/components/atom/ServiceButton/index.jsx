import { HTMLAttributes, HTMLDivElement } from "react";

import * as S from "./style";

/**
 * 
 * @param {{ icon: TablerIconComponent, children: any } & HTMLAttributes<HTMLDivElement>} ComponentProps 
 * @returns 
 */
const ServiceButton = ({ icon, children, ...props }) => {
    return <S.ButtonWrap { ...props }>
        { icon || <></> }
        <span>{ children }</span>
    </S.ButtonWrap>
}

export default ServiceButton;