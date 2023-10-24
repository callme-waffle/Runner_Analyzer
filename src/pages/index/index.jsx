import { IconCalendar } from "@tabler/icons-react";
import SelectionBlock from "../../components/molecule/SelectionBlock";
import BlockList from "../../components/molecule/BlockList";
import { ListContentMode } from "../../components/molecule/BlockList/constant";


const IndexPage = () => {
    return <section style={{ width: "500px" }}>
        {/* <SelectionBlock 
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
        >검색 연도</SelectionBlock> */}
        {/* <BlockList mode={ ListContentMode.individual }>{[
            { name: "김화균", dist: 42 },
            { name: "이승준", dist: 62 },
            { name: "이승재", dist: 95 },
        ]}</BlockList> */}
        <BlockList mode={ ListContentMode.individual }>{[
            { date: new Date(), name: "김화균", dist: 42 },
            { date: new Date(), name: "이승준", dist: 62 },
            { date: new Date(), name: "이승재", dist: 95 },
        ]}</BlockList>
    </section>
}

export default IndexPage;