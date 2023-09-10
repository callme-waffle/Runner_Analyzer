import { useState } from "react";
import DisplayArea from "../../components/DisplayArea";
import TextArea from "../../components/TextArea";
import { useDBState } from "./hooks/useDBState";
import { StyledServieWrap } from "./style";

function Index() {

  const {
    value: { data },
    handlers: { onValueChanged }
  } = useDBState();

  return <StyledServieWrap>
    <DisplayArea data={ data } />
  </StyledServieWrap>;
}

export default Index;
