import React from 'react';

import { ButtonStyle } from './styles'

export const Button = ({text, onClick}) => (
    <ButtonStyle
        onClick={onClick ? onClick : ''}
    >
        {text}
    </ButtonStyle>
);

export default Button;