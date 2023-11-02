import { HTMLAttributes, HTMLDivElement } from "react";

import ServiceBlock from "../../atom/ServiceBlock";

/**
 * 
 * @param { {
 *  index?: number,
 *  value: { name: string, dist: number },
 * } & HTMLAttributes<HTMLDivElement> } ComponentProps 
 * @returns 
 */
const UserBlock = ({ index, value: { name, dist }, ...props }) => {
    return <ServiceBlock blockProps={ props }>
        <section className="log-keys-area">
            { index && <span>{ index }</span> }
            <span>{ name }</span>
        </section>
        <section className="log-value-area">
            <span>{ dist }</span>
            <span>km</span>
        </section>
    </ServiceBlock>
}

export default UserBlock;