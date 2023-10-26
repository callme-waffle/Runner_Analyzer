import { createContext, useState } from "react";
import HomeTemplate from "../../components/template/Home";

export const IsMobileContext = createContext( false );

const IndexPage = () => {

    const [ is_mobile, setIsMobile ] = useState( true );

    return <IsMobileContext.Provider value={ is_mobile }>
        <HomeTemplate/>
    </IsMobileContext.Provider>
}

export default IndexPage;