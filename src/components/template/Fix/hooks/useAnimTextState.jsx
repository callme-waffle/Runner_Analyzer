import { useEffect, useState } from "react";

import util from "../../../../util";

/**
 * 
 * @param { string } stage 현재 FixTemplate에서 진행 중인 stage
 * @param { number } tmout 제목전환 간 설정할 transition standby 시간 (단위: ms)
 * @returns { [ boolean, string, ( v: string ) => void ] }
 */
export const useAnimTextState = ( stage, template, tmout = 300 ) => {

    const [ is_visible, setVisible ] = useState( false );
    const [ text, setText ] = useState( template[ stage ] || "" );

    const updateText = async ( v ) => {
        setVisible( false );
        await util.sleep( tmout );
        setText( v || "" );
        setVisible( true );
    }

    useEffect(() => { ( async () => {
        const new_text = template[ stage ];
        updateText( new_text );
    } )() }, [ stage ]);
    
    return [ is_visible, text, updateText ]
}