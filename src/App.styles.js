import styled from 'styled-components';

export const AppWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const BodyWrapper = styled.div`
    padding-top: 80px;
    width: 100%;
    flex-grow: 1;
`;

export const Spinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`;
