import { ReactElement, HTMLAttributes } from "react";

import * as S from "./style";
import { SERVICE_BLOCK_TYPE } from "./constant";

/**
 * 
 * @param {{ 
 *  children: ReactElement, 
 *  type: keyof SERVICE_BLOCK_TYPE, 
 *  blockProps?: HTMLAttributes<HTMLDivElement> 
 * }} ReactComponentProps 
 * @returns 
 */
const ServiceBlock = ({ children, type = SERVICE_BLOCK_TYPE.COMMON, blockProps = {} }) => {
    return <S.ServiceBlockBox block_type={ type } { ...( blockProps ) }>
        { children }
    </S.ServiceBlockBox>
}

export default ServiceBlock;