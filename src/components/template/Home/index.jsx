import { useCallback, useEffect, useMemo, useState } from "react";

import * as S from "./style";

import { ListContentMode } from "../../molecule/BlockList/constant";

import ListCtrlArea from "../../organism/ListCtrlArea";
import BlockList from "../../molecule/BlockList";
import ServiceButton from "../../atom/ServiceButton";
import { IconRotate } from "@tabler/icons-react";
import { useListDataState } from "./hooks/useListDataState";

const HomeTemplate = () => {

    const [ options, setOptions ] = useState({ mode: ListContentMode.monthly });
    const [ mode, setMode ] = useState( options?.mode );

    const [ is_list_ready, list_data ] = useListDataState( options );
    useEffect(() => {
        setMode( options.mode );
    }, [ is_list_ready ]);

    const onOptionChange = useCallback(( options ) => setOptions( options ), []);

    const bude_name = "103정보통신단 본부중대";

    return <S.HomeTemplateWrap>
        <S.HomeTitleArea>{ 
            bude_name.split(" ").map( t => <p>{ t }</p> )
        }</S.HomeTitleArea>
        <S.HomeContentArea>
            <ListCtrlArea onOptionChange={ onOptionChange }/>
            <BlockList className="home-viewlist" mode={ mode }>{ list_data }</BlockList>
        </S.HomeContentArea>
        <ServiceButton className="home-probbtn" icon={ <IconRotate/> }>기록이 이상한가요?</ServiceButton>
    </S.HomeTemplateWrap>
}

export default HomeTemplate;