import { useContext, useEffect } from "react";
import ServiceInput from "../../../ServiceInput";
import HorizontalOptionSelector from "../../../HorizontalOption";
import { StyledSelectionArea } from "./style";
import { ListModeContext, SelectionContext } from "../../index";
import { LISTMODE_OPTION_SELECTIONS, ListMode, SelectionType } from "../../constant";
import { DBContext } from "../../../../pages/index";
import { getMonthSelections } from "./logic";

function SelectionArea() {

    const [ mode, setMode ] = useContext( ListModeContext );
    const [ selection, setSelection ] = useContext( SelectionContext );
    const { month, name } = selection;

    const { months } = useContext( DBContext );
    const month_selections = getMonthSelections( months );

    const onOptionClick = ( mode = ListMode.default ) => {
        setMode( mode );
    }

    const onMonthClick = ( month_selection = { year: -1, month: -1 } ) => {
        setSelection( SelectionType.MONTH, month_selection );
    }

    const onNameInput = ( v ) => {
        if ( v.length === 0 )
            return setSelection( SelectionType.NAME,  null );
        return setSelection( SelectionType.NAME,  v );
    }

    return <StyledSelectionArea>
        <HorizontalOptionSelector value={ mode } onOptionClick={ onOptionClick }>
            { LISTMODE_OPTION_SELECTIONS }
        </HorizontalOptionSelector>
        { 
            ( Object.keys( months ).length > 0 ) &&  
                <HorizontalOptionSelector value={ month } onOptionClick={ onMonthClick }>
                    { month_selections }
                </HorizontalOptionSelector>
        }
        { ( mode === ListMode.logging ) && 
            <ServiceInput className="uname-input" placeholder="이름을 입력하여 상세기록 확인" 
                value={ name } onInput={ onNameInput }
            /> 
        }
    </StyledSelectionArea>
}

export default SelectionArea;
