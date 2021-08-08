import styled from 'styled-components/macro';

export const UserDataWrapper = styled.div`
    padding: 10px;
`;

export const ShowFiles = styled.span`
    color: #7f007e;

    font-size: 20px;
    cursor: pointer;
    position: relative;

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

export const HelloText = styled.div`
    font-size: 20px;
`;
