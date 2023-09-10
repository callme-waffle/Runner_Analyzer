import { useState } from "react";
import { StyledServieWrap, StyledTextArea } from "./style";

function TextArea({ onChange }) {

    const onTextChange = ( e ) => {
        if ( onChange ) return onChange(e.currentTarget.value);
    }

  return <StyledTextArea onChange={ onTextChange }/>
}

export default TextArea;
