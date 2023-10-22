import * as S from "./style";
import * as L from "./logic.js";

import ServiceBlock from "../../atom/ServiceBlock";

const UserBlock = ({ index, value: { name, dist } }) => {
    return <ServiceBlock>
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