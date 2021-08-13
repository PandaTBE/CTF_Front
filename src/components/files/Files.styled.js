import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';

export const FilesWrapper = styled.div`
    padding: 10px;
`;

export const StyledButton = styled(Button)`
    margin-top: 10px !important;
    span {
        text-transform: none !important;
    }
`;

export const PaperTitle = styled.div`
    text-align: center;
    margin-top: 5px;
`;
