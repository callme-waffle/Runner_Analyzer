import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import * as S from "./style";

import { SETTING_MENU_IDS } from "./constant";
import { useSettingPageState } from "./hooks/useSettingPageState";

import SettingTitleArea from "./sub/components/SettingTitleArea";
import SettingPageHome from "./sub/page/Home";
import SettingPageAccocuntCtrl from "./sub/page/AccountCtrl";



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
        <Routes>
            <Route path="/" element={ <SettingPageHome onMenuClick={ onMenuBlockClick }/> }/>
            <Route path="/accounts" element={ <SettingPageAccocuntCtrl/> }/>
            <Route path="/runlogs/add" element={ <></> }/>
        </Routes>
        <S.SettingTemplateBackground/>
    </S.SettingTemplateWrap>
}

export default SettingTemplate;