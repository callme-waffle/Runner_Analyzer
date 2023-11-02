import * as L from "./logic.js";

import ServiceBlock from "../../atom/ServiceBlock";

const LogBlock = ({ value: { date, name, dist }, ...props }) => {
    return <ServiceBlock blockProps={ props }>
        <section className="log-keys-area">
            <span>{ L.convertDateToTextFormat( date ) }</span>
            <span>{ name }</span>
        </section>
        <section className="log-value-area">
            <span>{ dist }</span>
            <span>km</span>
        </section>
    </ServiceBlock>
}

export default LogBlock;