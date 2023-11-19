import { useEffect, useState } from "react"
import util from "../util";

/**
 * state가 지정시간 뒤 지연되어 변경되도록 합니다
 * @param { T } curr_state 기존시점대로 변경되는 state값
 * @param { number } tmout 지연시키는 ms값 (default: 300)
 * @returns { [ T, boolean ] } 지연적용되는 state값; [ 지연적용 state, 지연적용여부 ]
 */
export const useDelayState = ( curr_state, tmout = 300 ) => {
    const [ state, setState ] = useState( curr_state );
    const [ is_applied, setIsApplied ] = useState( true );
    
    useEffect( () => {
        ( async () => {
            setIsApplied( false );
            await util.sleep( tmout );
            setState( curr_state );
            setIsApplied( true );
        } )()
    }, [ curr_state ] );
    
    return [ state, is_applied ];
}