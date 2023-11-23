import { useState, } from "react";
import util from "../util";

/**
 * 특정시간 이후 변경되는 상태를 제공합니다
 * @param { T } init 초기에 설정할 상태값을 지정합니다
 * @param { number } tmout 몇초 이후 변경될지 설정합니다 (default: 300)
 * @returns { [ boolean, T, ( value: T ) => any ] } [ 표시가능여부, value, value dispatcher ]
 */
export const useDelayState = ( init, tmout = 300 ) => {

    const [ value, setValue ] = useState( init || undefined );
    const [ is_value_available, setValueAvailable ] = useState( false );

    const updateValue = async ( v ) => {
        setValueAvailable( false );
        await util.sleep( tmout );
        setValue( v );
        setValueAvailable( true );

        return true;
    }
    
    return [ is_value_available, value, updateValue ];
}