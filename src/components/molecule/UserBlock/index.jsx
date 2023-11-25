import { HTMLAttributes, HTMLDivElement } from "react";

import ServiceBlock from "../../atom/ServiceBlock";

/**
 * 
 * @param { {
 *  index?: number,
 *  values: { title: string, contents: string[] },
 *  unit?: string,
 * } & HTMLAttributes<HTMLDivElement> } ComponentProps 
 * @returns 
 */
const UserBlock = ({ index, values: { title, contents }, ...props }) => {
    return <ServiceBlock blockProps={ props }>
        <section className="log-keys-area">
            { index && <span>{ index }</span> }
            <span>{ title }</span>
        </section>
        <section className="log-value-area">{
            contents.map( data => <span>{ data }</span> )
        }</section>
    </ServiceBlock>
}

export default UserBlock;