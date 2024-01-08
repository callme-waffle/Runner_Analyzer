import { HTMLAttributes, HTMLDivElement } from "react";

import ServiceBlock from "../../atom/ServiceBlock";
import ServiceCheckbox from "../../atom/ServiceCheckbox";

/**
 * 
 * @param { {
 *  index?: number,
 *  mode?: "view" | "select" | "create",
 *  values: { title: string, contents: string[], selected?: boolean },
 *  animation?: boolean,
 *  onClick?: ( e: MouseEvent, v?: any ) => any
 * } & HTMLAttributes<HTMLDivElement> } ComponentProps 
 * @returns 
 */
const UserBlock = ({ index, mode, values: { title, contents, value, selected = false }, animation = false, ...props }) => {
    
    const onBlockClick = ( e ) => {
        if ( props?.onClick ) props.onClick( e, value );
    }

    return <ServiceBlock 
        animation={ animation }
        blockProps={{ 
            ...props,
            onClick: onBlockClick, 
            className: `${ props?.className || ""} ${ selected ? "select" : "" }`,
        }}
    >
        <section className="log-keys-area">
            { 
                ( mode === "select" ) ? <ServiceCheckbox 
                    active={ selected } 
                    style={{ fontSize: "1.5em" }}
                />
                : ( mode === "view" && index ) ? <span>{ index }</span> 
                : <></>
            }
            <span>{ title }</span>
        </section>
        <section className="log-value-area">{
            contents.map( data => <span>{ data }</span> )
        }</section>
    </ServiceBlock>
}

export default UserBlock;