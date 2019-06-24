import React from 'react';

import { Text } from './styles'

export const InputText = ({ placeholder, value, onChange, width }) => (
    <Text type="text"
        placeholder={placeholder ? placeholder : ''}
        value={value ? value : ''}
        onChange={onChange ? onChange : ''}
        width={width && width}
    />
)

export default InputText;