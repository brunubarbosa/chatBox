import React from 'react';

export const Button = ({text, onClick}) => (
    <button
        onClick={onClick ? onClick : ''}
    >
        {text}
    </button>
);

export default Button;