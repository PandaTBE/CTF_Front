import { Box, Button, TextField } from '@material-ui/core';
import styled from 'styled-components/macro';

export const LoginWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 25%;
`;

export const LoginFormWrapper = styled(Box)`
    width: 100%;
    height: 300px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const LoginHeader = styled.div`
    text-align: center;
    font-size: 18px;
    color: #757575;
`;

export const LoginAndRegisterWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const LoginOrRegister = styled.div`
    margin-right: 5px;

    position: relative;
    font-size: 14px;
    margin-left: 5px;
    cursor: pointer;
    color: #757575;
    :first-child {
        margin-left: 0;
    }

    ::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: -1px;
        background: #000;
        height: 1px;
        transition-property: left right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }
    :hover {
        ::after {
            right: 0;
        }
    }
    :focus {
        ::after {
            right: 0;
        }
    }

    :active {
        ::after {
            right: 0;
        }
    }
`;

export const TextFieldsWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
    margin-top: 30px !important;
    height: 50px;
`;

export const StyledButton = styled(Button)`
    height: 50px;
    span {
        text-transform: none;
        font-weight: 400;
        color: #757575;
    }
`;
