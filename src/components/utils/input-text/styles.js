import styled from 'styled-components';

export const Text = styled.input`
    border: none;
    border-bottom: 1px solid #5f5f5f;
    outline: none;
    padding-left: 5px;
    width: ${props => props.width || '200px'}
`;