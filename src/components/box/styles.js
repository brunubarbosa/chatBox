import styled from 'styled-components';

export const BoxContainer = styled.div`
    background-color: white;
    border: 1px solid #666;
    padding: 10px;
    box-shadow: 1px 1px 1px;
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    width: 200px;

    & footer {
        display: flex;
        justify-content: flex-end;

        & svg {
            margin-left: 10px;
        }

        & span {
            padding: 2px;
            border-radius: 1px;
            border: 1px solid #757575;
            user-select: none;
        }
    }
`;