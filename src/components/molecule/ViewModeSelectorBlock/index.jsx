import { HTMLAttributes, HTMLDivElement, useContext } from "react";

import * as S from "./style";

import { ListContentMode } from "../BlockList/constant";
import { ListContentName } from "./constant";

import { IsMobileContext } from "../../../pages/index";



/**
 * @param {{ mode: ListContentMode } & HTMLAttributes<HTMLDivElement>} param1
 * @returns 
 */
const ViewModeSelectorBlock = ({ mode = ListContentMode.individual, isSelected, ...props }) => {

    const isMobile = useContext( IsMobileContext );

    return <S.BlockWrap 
        className={`${
            isMobile ? 
                "viewmode-mobile" : 
                "viewmode-desktop"
            } ${ 
                isSelected ? "active" : ""
            } ${ 
                props?.className || "" 
        }`} { ...props }
    >{ ListContentName[ mode ] }</S.BlockWrap>
}

export default ViewModeSelectorBlock;