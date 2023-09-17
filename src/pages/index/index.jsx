import { createContext, useState } from "react";
import DisplayArea from "../../components/DisplayArea";
import TextArea from "../../components/TextArea";
import { useDBState } from "./hooks/useDBState";
import { StyledServieWrap } from "./style";

export const DBContext = createContext({ months: {}, logs: {} });
function Index() {

  const {
    value: { data },
    handlers: { onValueChanged }
  } = useDBState();

  return <StyledServieWrap>
    <TextArea onChange={ onValueChanged }/>
    <DBContext.Provider value={ data }>
      <DisplayArea/>
    </DBContext.Provider>
  </StyledServieWrap>;
}

export default Index;
