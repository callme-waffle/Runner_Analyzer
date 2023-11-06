import * as S from "./style";

import { IconRotate, IconUser } from "@tabler/icons-react";

import ServiceButton from "../../../../../../../atom/ServiceButton";
import InputBlock from "../../../../../../../molecule/InputBlock";
import { useCallback, useEffect, useRef, useState } from "react";

const sleep = ( tmout ) => 
    new Promise( resolve => 
        setTimeout( () => resolve( true ), tmout ) 
    );

const UpdateChatInput = ({ onRequesterInput, onStageFinish }) => {

    const name_prev = useRef();
    const [ name, setName ] = useState( "" );
    const [ is_clicked, setIsClicked ] = useState( false );

    useEffect(() => { (async () => {
        name_prev.current = name;
        await sleep( 300 );
        if ( name_prev.current === name ) onRequesterInput( name );
    })() }, [ name ]);

    const onUpdateBtnClick = useCallback( async () => {
        if ( is_clicked ) return;
        setIsClicked( true );
        
        await sleep( 300 );
        return onStageFinish();
    }, [ is_clicked, onStageFinish ] );

    return <S.SubmitArea>
        <span className="input-desc-text">업데이트 요청자 이름 입력 후 표시되는 아래 버튼을 눌러주세요</span>
        <InputBlock
            icon={ <IconUser/> }
            type="text"
            placeholder="요청자 이름"
            onValueChange={ setName }
        />
        <ServiceButton
            icon={ <IconRotate/> }
            className={ 
                `update-btn ${ 
                    name.length > 0 ? "active" : "deactive" 
                } ${
                    is_clicked ? "clicked" : ""
                }` 
            }
            onClick={ onUpdateBtnClick }
        >채팅기록 업데이트</ServiceButton>
    </S.SubmitArea>
}

export default UpdateChatInput;