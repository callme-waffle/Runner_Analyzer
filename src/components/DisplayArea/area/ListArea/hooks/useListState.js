import { useContext, useEffect, useMemo, useState } from "react";
import { ListMode, ListTitle } from "../../../constant";
import { convertToLogList, convertToStatisticList } from "../logic";
import { DBContext } from "../../../../../pages/index";

export const useListState = ( mode, selection ) => {

    const { month, name } = selection;

    const { logs: log_obj } = useContext( DBContext );
    const logs = useMemo(() => Object.keys( log_obj )
        .map( v => ({ ...log_obj[v], name: v }) )
    , [ log_obj ]);

    const [ list, setList ] = useState([]);
    const [ list_title, setListTitle ] = useState( ListTitle[ mode ] );

    useEffect(() => {
        let new_list = [];
        switch( mode ) {
            case ListMode.default: break;
            case ListMode.statistic:
                new_list = convertToStatisticList( logs, month );
                break;
            case ListMode.logging:
                new_list = convertToLogList( logs, month, name )
                break;
        }

        setListTitle( ListTitle[ mode ] );
        setList( new_list );
    }, [ month, name, mode ]);

    useEffect(() => {
        console.log("list updated", list);
    }, [ list ]);

    return [ list, list_title ];
}