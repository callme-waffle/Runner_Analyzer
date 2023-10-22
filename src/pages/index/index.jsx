import { IconCalendar } from "@tabler/icons-react";
import SelectionBlock from "../../components/molecule/SelectionBlock";


const IndexPage = () => {
    return <section style={{ width: "500px" }}>
        <SelectionBlock 
            icon={ <IconCalendar/> }
            selections={ [
                { text: "text1", value: "value1" },
                { text: "text2", value: "value2" },
                { text: "text3", value: "value3" },
                { text: "text4", value: "value4" },
                { text: "text5", value: "value5" },
                { text: "text6", value: "value6" },
                { text: "text6", value: "value6" },
                { text: "text6", value: "value6" },
                { text: "text6", value: "value6" },
                { text: "text6", value: "value6" },
            ] }
        >검색 연도</SelectionBlock>
    </section>
}

export default IndexPage;