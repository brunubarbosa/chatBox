import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: #1c66f0;
    cursor: pointer;

    border: none;
    border-radius: 5%;
    padding: 8px;
    color: white;

    &:hover {
        opacity: .85;
    }

    &:active {
        opacity: 1;
    }
`;