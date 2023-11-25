import * as L from "./logic.js";

import ServiceBlock from "../../atom/ServiceBlock";

const LogBlock = ({ index, values: { title, contents }, ...props }) => {
    return <ServiceBlock blockProps={ props }>
        <section className="log-keys-area">
            <span>{ L.convertDateToTextFormat( index ) }</span>
            <span>{ title }</span>
        </section>
        <section className="log-value-area">{
            contents.map( data => <span>{ data }</span> )
        }</section>
    </ServiceBlock>
}

export default LogBlock;