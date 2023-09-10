import { useState, useEffect, useMemo } from "react";
import { ListMode, ListTitle } from "../constant";
import { getMonthSelections, convertToLogList, convertToStatisticList } from "../logic";

export const useDisplayAreaState = ({ months, logs: log_obj } = { months: {}, logs: [] }) => {
    const month_selections = getMonthSelections( months );
    const logs = useMemo(() => Object.keys( log_obj )
        .map( v => ({ ...log_obj[v], name: v }) )
    , [ log_obj ]);

    const [ list, setList ] = useState([]);
    const [ list_mode, setListMode ] = useState( ListMode.default ); 
    const [ list_title, setListTitle ] = useState( ListTitle[ list_mode ] );

    const [ sel_month, setSelMonth ] = useState({ year: -1, month: -1 });
    const [ sel_name, setSelName ] = useState( null );
    useEffect(() => {
        let new_list = [];
        switch( list_mode ) {
            case ListMode.default: break;
            case ListMode.statistic:
                new_list = convertToStatisticList( logs, sel_month );
                break;
            case ListMode.logging:
                new_list = convertToLogList( logs, sel_month, sel_name )
                break;
        }

        setListTitle( ListTitle[ list_mode ] );
        setList( new_list );
    }, [ sel_month, sel_name, list_mode ]);

    const setSelection = ( type, param ) => {
        switch( type ) {
            case SelectionType.MONTH:
                return setSelMonth( param );
            case SelectionType.NAME:
                return setSelName( param );
        }
    }

    useEffect(() => {
        console.log({
            data: { list, mode: list_mode, title: list_title, month_selections },
            selection: { month: sel_month, name: sel_name },
            dispatch: { setMode: setListMode, setSelection }
        });
    }, [])

    return {
        data: { list, mode: list_mode, title: list_title, month_selections },
        selection: { month: sel_month, name: sel_name },
        dispatch: { setMode: setListMode, setSelection }
    }
}

export const SelectionType = {
    MONTH: "SERVICE/SELCTION_TYPE/MONTH",
    NAME: "SERVICE/SELECTION_TYPE/NAME",
}