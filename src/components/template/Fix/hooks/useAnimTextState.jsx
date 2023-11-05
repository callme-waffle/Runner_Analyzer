import { useEffect, useState } from "react"


const sleep = ( tmout ) => 
    new Promise( resolve => 
        setTimeout( () => resolve( true ), tmout ) 
    );

/**
 * 
 * @param { string } stage 현재 FixTemplate에서 진행 중인 stage
 * @param { number } tmout 제목전환 간 설정할 transition standby 시간 (단위: ms)
 * @returns { [ boolean, string ] }
 */
export const useAnimTextState = ( stage, template, tmout = 300 ) => {

    const [ is_visible, setVisible ] = useState( false );
    const [ title, setTitle ] = useState( template[ stage ] || "" );

    useEffect(() => { ( async () => {
        const new_text = template[ stage ];

        setVisible( false );
        await sleep( tmout );
        setTitle( new_text || "" );
        setVisible( true );

    } )() }, [ stage ]);
    
    return [ is_visible, title ]
}