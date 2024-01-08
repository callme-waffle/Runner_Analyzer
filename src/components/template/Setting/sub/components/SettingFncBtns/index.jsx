import { HTMLAttributes, HTMLTableSectionElement } from "react";

import SettingFncBtn from "../SettingFncBtn";

/**
 * 
 * @param { {
 *  btn_ids: string[],
 *  hooks: [
 *   ( id: ValueOf<CTRL_BUTTON_IDS> ) => boolean,
 *   ( id: ValueOf<CTRL_BUTTON_IDS> ) => string,
 *  ] } & HTMLAttributes<HTMLTableSectionElement> } param0 
 * @returns 
 */
const SettingFncBtns = ({ 
    btn_ids, hooks,
    onClick,
    ...props 
}) => {
    return <section { ...props }>{ 
        btn_ids.map( id => <SettingFncBtn id={ id }{ ...hooks } onClick={ onClick } /> )
    }</section>
}

export default SettingFncBtns;