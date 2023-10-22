import { useState } from "react";

import * as S from "./style";

import { SERVICE_BLOCK_TYPE } from "../../atom/ServiceBlock/constant";

const InputBlock = ({ 
    icon,  
    type, placeholder
}) => {

    const [ value, setValue ] = useState( "" );

    return <S.InputBlockBox
        type={ SERVICE_BLOCK_TYPE.INPUT }
        isMobile={ true }
    >
        { icon || <></> }
        <input 
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ setValue }
        />
    </S.InputBlockBox>
}

export default InputBlock;