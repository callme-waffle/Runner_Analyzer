import { useEffect, useState } from "react";
import * as S from "./style";
import { IconAlertTriangle } from "@tabler/icons-react";

const SettingMsgBlock = ({ children }) => {

    const [ visible, setVisible ] = useState( false );
    useEffect(() => {
        if ( children ) setVisible( true );
        else setVisible( false );
    }, [ children ]);

    return <S.SettingMsgBlock visible={ visible }>
        <IconAlertTriangle strokeWidth="3" color="black"/>
        <span>{ children }</span>
    </S.SettingMsgBlock>
}

export default SettingMsgBlock