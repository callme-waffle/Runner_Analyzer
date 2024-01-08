import { SETTING_MENUS } from "../../../constant";
import SettingMenuBlock from "../../components/SettingMenuBlock";

import * as S from "./style";

const SettingPageHome = ({ onMenuClick }) => {
    return <S.SettingHomeArea>
        <S.SettingMenusArea>{
            Object.values( SETTING_MENUS ).filter( v => !v.is_default ).map( ({ title, desc, mid }) => <>
                <SettingMenuBlock desc={ desc } onClick={ ( e ) => onMenuClick( e, mid ) }>{ title }</SettingMenuBlock>
            </> )
        }</S.SettingMenusArea>
    </S.SettingHomeArea>
}

export default SettingPageHome;