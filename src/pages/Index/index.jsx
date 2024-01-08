import { createContext, useState } from "react";

import HomeTemplate from "../../components/template/Home";
import FixTemplate from "../../components/template/Fix";

export const IsMobileContext = createContext( false );
export const SetOpenFixContext = createContext( ( open ) => {} );

const IndexPage = () => {

    const [ is_mobile, setIsMobile ] = useState( true );
    const [ open_fix, setOpenFix ] = useState( false );

    return <IsMobileContext.Provider value={ is_mobile }>
        <SetOpenFixContext.Provider value={ setOpenFix }>
            <FixTemplate className={ `${ open_fix ? "active" : "deactive" }` }/>
            <HomeTemplate/>
        </SetOpenFixContext.Provider>
    </IsMobileContext.Provider>
}

export default IndexPage;