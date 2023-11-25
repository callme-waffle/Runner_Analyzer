import { ReactElement, HTMLAttributes } from "react";

import * as S from "./style";
import { SERVICE_BLOCK_TYPE } from "./constant";

/**
 * 
 * @param {{ 
 *  children: ReactElement, 
 *  type: keyof SERVICE_BLOCK_TYPE, 
 *  animation?: boolean,
 *  blockProps?: HTMLAttributes<HTMLDivElement> 
 * }} ReactComponentProps 
 * @returns 
 */
const ServiceBlock = ({ children, type = SERVICE_BLOCK_TYPE.COMMON, animation = false, blockProps = {} }) => {
    return <S.ServiceBlockBox animate={ animation } block_type={ type } { ...( blockProps ) }>
        { children }
    </S.ServiceBlockBox>
}

export default ServiceBlock;