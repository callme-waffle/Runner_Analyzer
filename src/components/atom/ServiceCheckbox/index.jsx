import { HTMLAttributes, HTMLDivElement } from "react";
import { IconCheck } from "@tabler/icons-react";

import * as S from "./style";

/**
 * 
 * @param {{
 *  active: boolean
 * } & HTMLAttributes<HTMLDivElement> } param0 
 * @returns 
 */
const ServiceCheckbox = ({ active = false, ...props }) => {
    return <S.ServiceCheckBox active={ active } { ...props }>
        <IconCheck strokeWidth="3" color="#fff"/>
    </S.ServiceCheckBox>
}

export default ServiceCheckbox