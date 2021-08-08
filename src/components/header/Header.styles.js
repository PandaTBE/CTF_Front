import { Avatar, Paper } from '@material-ui/core';
import styled from 'styled-components/macro';

export const StylesHeaderWrapper = styled(Paper)`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 16px;
    box-sizing: border-box;
    width: 100%;
`;

export const Logo = styled.img`
    width: 90px;
    height: 55px;
`;

export const AuthInformation = styled.div`
    position: relative;
`;

export const LoginText = styled.div`
    font-size: 16px;
    cursor: pointer;

    ::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: -2px;
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

export const StyledAvatar = styled(Avatar)`
    margin-right: 10px;
    && {
        background-color: #85c3e3;
        cursor: pointer;
    }
`;

export const AuthWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoutTextWrapper = styled.div`
    position: relative;
`;
