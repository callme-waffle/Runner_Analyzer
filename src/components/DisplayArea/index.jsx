import { createContext, useState } from "react";
import { ListMode } from "./constant";
import { StyledDisplayArea } from "./style";
import ListArea from "./area/ListArea";
import SelectionArea from "./area/SelectionArea";

import { useSelectionState } from "./hooks/useSelectionState";

export const SelectionContext = createContext([ { month: null, name: null }, () => {} ]);
export const ListModeContext = createContext([ ListMode.default, () => {} ]);

function DisplayArea() {

    const listmodeState = useState( ListMode.default );
    const selectionState = useSelectionState();

    return <StyledDisplayArea>
        <ListModeContext.Provider value={ listmodeState }>
            <SelectionContext.Provider value={ selectionState }>
                <SelectionArea/>
                <ListArea/>
            </SelectionContext.Provider>
        </ListModeContext.Provider>
    </StyledDisplayArea>
}

export default DisplayArea;