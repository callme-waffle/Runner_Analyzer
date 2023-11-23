import { IconChevronRight } from "@tabler/icons-react";
import * as S from "./style";

const SettingMenuBlock = ({ desc, children, onClick }) => {
    return <S.SettingMenuBlockWrap onClick={ onClick }>
        <S.MenuBlockTextArea>
            <h1>{ children }</h1>
            <span>{ desc }</span>
        </S.MenuBlockTextArea>
        <IconChevronRight/>
    </S.SettingMenuBlockWrap>
}

export default SettingMenuBlock;