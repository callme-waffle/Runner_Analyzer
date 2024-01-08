import { HTMLAttributes, HTMLDivElement, useEffect, useState } from "react";

import * as S from "./style";

import ServiceBlock from "../../atom/ServiceBlock";

/**
 * 
 * @param { {
 *  init?: {
 *      name?: string,
 *      dc_date?: string
 *  }
 *  onInputComplete?: ( { name: string, dc_date: number } ) => any
 * } & HTMLAttributes<HTMLDivElement> } ComponentProps 
 * @returns 
 */
const UserCreateBlock = ({ init, onInputComplete, ...props }) => {

    const [ values, setValues ] = useState({ name: init?.name, dc_date: init?.dc_date });
    useEffect(() => {
        if ( !values.name || !values.dc_date ) return;
        if ( !/[가-힣]{0,10}/.test(values.name) || !/[0-9]{4}.[0-9]{2}.[0-9]{2}/.test( values.dc_date ) ) return;

        if ( onInputComplete ) onInputComplete( values );
    }, [ values ]);

    return <S.UserCreateBlockWrap>
        <ServiceBlock
            animation={ true }
            blockProps={{ ...props, className: `${ props?.className || ""} select`, }}
        >
            <section className="log-keys-area">
                <S.UserCreateBlockInput 
                    type="text" pattern="[가-힣]{0,10}" placeholder="사용자 이름"
                    value={ values.name }
                    onChange={ ( e ) => setValues( p => ({ ...p, name: e.target.value }) ) }
                />
            </section>
            <section className="log-value-area">{
                <S.UserCreateBlockInput 
                    type="text" pattern="[0-9]{4}.[0-9]{2}.[0-9]{2}" placeholder="전역일 (YYYY.MM.DD)"
                    value={ values.dc_date }
                    onChange={ ( e ) => setValues( p => ({ ...p, dc_date: e.target.value }) ) }
                />
            }</section>
        </ServiceBlock>
    </S.UserCreateBlockWrap>
}

export default UserCreateBlock;