import { HTMLAttributes, HTMLTableSectionElement, HTMLDivElement, MouseEvent as ReactMouseEvent } from "react";

import SettingFncBtn from "../SettingFncBtn";

const assignAttributes = ( ...attr_groups ) => {
    const assigned_attrs = {};
    attr_groups.forEach( attr_groups => {
        if ( !attr_groups ) return;
        Object.keys( attr_groups ).forEach( attr => {
            if ( !assigned_attrs[ attr ] ) {
                assigned_attrs[ attr ] = attr_groups[ attr ];
                return;
            }
            assigned_attrs[ attr ] += ` ${ attr_groups[ attr ] }`;
        } )
    } )

    return assigned_attrs;
}

/**
 * 
 * @param { HTMLAttributes<HTMLTableSectionElement> & {
 *  btn_ids: string[],
 *  btn_props: {
 *      common: HTMLAttributes<HTMLDivElement>,
 *  } & {
 *      [ keys in CTRL_BUTTON_IDS ]: HTMLAttributes<HTMLDivElement>
 *  },
 *  btn_hooks: {
 *   getSelectable: ( id: ValueOf<CTRL_BUTTON_IDS> ) => boolean,
 *   getText: ( id: ValueOf<CTRL_BUTTON_IDS> ) => string,
 *  },
 *  onClick: ( e: ReactMouseEvent<HTMLDivElement, MouseEvent> ) => any
 *  } } param0 
 * @returns 
 */
const SettingFncBtns = ({ 
    btn_ids, btn_hooks, btn_props = {},
    onClick,
    ...props 
}) => {
    return <section { ...props }>{ 
        btn_ids.map( id => <SettingFncBtn 
            id={ id }
            { ...assignAttributes( btn_props.common, ( btn_props[ id ] || {} ) ) }
            { ...btn_hooks } 
            onClick={ ( e ) => onClick( e, id ) } 
        /> )
    }</section>
}

export default SettingFncBtns;