import React from 'react';

import { BoxContainer } from './styles'
export function Box(props){
    return(
        <BoxContainer>
            {props.children}
            </BoxContainer>
    )
}