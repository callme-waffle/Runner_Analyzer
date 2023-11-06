import { useCallback, useContext, useEffect, useState } from "react";
import { IconRotate } from "@tabler/icons-react";

import * as S from "./style";

import { useListDataState } from "./hooks/useListDataState";

import ListCtrlArea from "../../organism/ListCtrlArea";
import { ListContentMode } from "../../molecule/BlockList/constant";
import BlockList from "../../molecule/BlockList";
import ServiceButton from "../../atom/ServiceButton";
import { SetOpenFixContext } from "../../../pages/index";

const bude_name = "103정보통신단 본부중대";

const HomeTemplate = () => {

    const [ options, setOptions ] = useState({ mode: ListContentMode.monthly });
    const [ mode, setMode ] = useState( options?.mode );

    const [ is_list_ready, list_data, list_title ] = useListDataState( options );
    useEffect(() => {
        if ( is_list_ready ) setMode( options.mode );
    }, [ is_list_ready ]);
    
    const onOptionChange = useCallback(( options ) => setOptions( options ), []);

    const setOpenFix = useContext( SetOpenFixContext );
    const onFixBtnClick = () => {
        setOpenFix( true );
    }

    return <S.HomeTemplateWrap>
        <S.HomeTitleArea>{ 
            bude_name.split(" ").map( t => <p>{ t }</p> )
        }</S.HomeTitleArea>
        <S.HomeContentArea>
            <ListCtrlArea onOptionChange={ onOptionChange }/>
            <BlockList 
                className="home-viewlist" 
                mode={ mode } 
                is_ready={ is_list_ready }
                title_data={ list_title }
            >{ list_data }</BlockList>
        </S.HomeContentArea>
        <ServiceButton 
            className="home-probbtn" 
            icon={ <IconRotate/> }
            onClick={ onFixBtnClick }
        >기록이 이상한가요?</ServiceButton>
    </S.HomeTemplateWrap>
}

export default HomeTemplate;