import styled from 'styled-components';

export const Text = styled.input`
    border: 3px solid green;
    height: 30px;
    border-radius: 4px;
    width: ${props => props.width || '200px'}
`;