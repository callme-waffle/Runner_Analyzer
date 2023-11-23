import { useEffect } from "react";
import { IconChevronLeft } from "@tabler/icons-react";

import * as S from "./style";

import { useDelayState } from "../../../../../../hooks/useDelayState";
import { SETTING_MENUS } from "../../../constant";

const SettingTitleArea = ({ curr, prev, onGoPrevClick }) => {

    const [ is_title_available, title, setTitle ] = useDelayState( SETTING_MENUS[ curr ].title );
    useEffect(() => {
        setTitle( SETTING_MENUS[ curr ].title );
    }, [ curr ]);

    return <S.SettingTitleArea 
        prev_visible={ prev }
        curr_visible={ is_title_available }
    >
        <section className="prev" onClick={ onGoPrevClick }>
            <IconChevronLeft strokeWidth={ 1 }/>
            <h3>{ SETTING_MENUS[ prev ]?.title || "" }</h3>
        </section>
        <h1>{ title }</h1>
    </S.SettingTitleArea>
}

export default SettingTitleArea;