import { AppBar } from '@material-ui/core';
import styled from 'styled-components/macro';

export const StyledAppBar = styled(AppBar)`
    height: 70px;
    padding: 5px 16px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;
