import { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import { SETTING_MENUS, SETTING_MENU_IDS } from "./constant";
import { useDelayState } from "../../../hooks/useDelayState";
import { IconChevronLeft } from "@tabler/icons-react";
import { useSettingPageState } from "./hooks/useSettingPageState";
import SettingTitleArea from "./sub/components/SettingTitleArea";
import SettingMenuBlock from "./sub/components/SettingMenuBlock";


const SettingTemplate = () => {

    const [ page, prev_page, setPage, goPrev ] = useSettingPageState( SETTING_MENU_IDS.HOME );

    const onMenuBlockClick = ( e, mid ) => {
        setPage( mid );
    }

    return <S.SettingTemplateWrap>
        <SettingTitleArea
            curr={ page }
            prev={ prev_page }
            onGoPrevClick={ goPrev }
        />
        <S.SettingMenusArea>{
            Object.values( SETTING_MENUS ).filter( v => !v.is_default ).map( ({ title, desc, mid }) => <>
                <SettingMenuBlock desc={ desc } onClick={ ( e ) => onMenuBlockClick( e, mid ) }>{ title }</SettingMenuBlock>
            </> )
        }</S.SettingMenusArea>
        <S.SettingTemplateBackground/>
    </S.SettingTemplateWrap>
}

export default SettingTemplate;