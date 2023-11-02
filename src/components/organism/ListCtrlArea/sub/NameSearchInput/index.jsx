
import { IconUser } from "@tabler/icons-react";
import InputBlock from "../../../../molecule/InputBlock";
import { 
    useContext, useState,
    HTMLAttributes, HTMLDivElement
} from "react";
import { SearchOptionContext } from "../..";
import { UNAVAILABLE_STR_CHK } from "./regex";

/**
 * 
 * @param { HTMLAttributes<HTMLDivElement> } props 
 * @returns 
 */
const NameSearchInput = ( props ) => {

    const [ { name }, setOptions ] = useContext( SearchOptionContext );
    const [ msg, setMsg ] = useState( "" );

    const onSearchNameChange = ( name ) => {
        if ( UNAVAILABLE_STR_CHK.test( name ) )
            setMsg( "올바르지 않은 입력값" );
        else setMsg( "" );

        setOptions( p => ({ ...p, name }) );
    }

    return <InputBlock
        { ...props }
        icon={ <IconUser/> }
        placeholder="중대원 이름"
        value={ name || "" }
        onValueChange={ onSearchNameChange }
        msg={ msg }
    />
}

export default NameSearchInput;