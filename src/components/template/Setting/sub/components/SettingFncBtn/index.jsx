import { HTMLAttributes, HTMLDivElement } from "react";
import * as S from "./style";

/**
 * 
 * @param { {
 *  id: string, 
 *  getSelectable: ( id: string ) => boolean 
 *  getText: ( id: string ) => string
 * } & HTMLAttributes<HTMLDivElement> } param0 
 * @returns 
 */
const SettingFncBtn = ({ 
    id, children,
    getSelectable = () => true, 
    getText = () => "",
    ...props 
}) => {
    return <S.SettingFncBtnBox 
        type={ id } selectable={ getSelectable( id ) } 
        { ...props }
    >
        { children || getText( id ) }
    </S.SettingFncBtnBox>
}

export default SettingFncBtn;