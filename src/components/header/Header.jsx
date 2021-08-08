import { AuthInformation, AuthWrapper, LoginText, Logo, StyledAvatar, StylesHeaderWrapper, LogoutTextWrapper } from './Header.styles';
import logo from '../../img/ctf_logo3.png';
import { useContext } from 'react';
import Context from '../../store/context';
import { AccountBox } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { getRequest } from '../../api/api';
import { urls } from '../../constants/urls';
import { actionTypes } from '../../store/reducer';
import { useEffect } from 'react';

// Компонент для отрисовки хедера
const Header = () => {
    const { state, enqueueSnackbar, dispatch } = useContext(Context);
    const { isAuth, logoutSuccess, logoutError } = state;
    const history = useHistory();

    useEffect(() => {
        if (logoutSuccess) {
            enqueueSnackbar('Success logout', {
                variant: 'success',
            });
            dispatch({ type: actionTypes.SET_LOGOUT_SUCCESS, payload: false });
            history.push('/');
        }
        // eslint-disable-next-line
    }, [logoutSuccess]);

    useEffect(() => {
        if (logoutError) {
            enqueueSnackbar('Logout error', {
                variant: 'error',
            });
            dispatch({ type: actionTypes.SET_LOGOUT_ERROR, payload: false });
        }
        // eslint-disable-next-line
    }, [logoutError]);

    const loginHandler = () => history.push('/login');
    const logoutHandler = () => getRequest(urls.LOGOUT, actionTypes.LOGOUT_SUCCESS, dispatch);

    return (
        <StylesHeaderWrapper elevation={1}>
            <Logo src={logo} alt='ctf logo' />
            <AuthInformation>
                {isAuth ? (
                    <AuthWrapper>
                        <StyledAvatar>
                            <AccountBox />
                        </StyledAvatar>
                        <LogoutTextWrapper>
                            <LoginText onClick={logoutHandler}>Logout</LoginText>
                        </LogoutTextWrapper>
                    </AuthWrapper>
                ) : (
                    <LoginText onClick={loginHandler}>Login</LoginText>
                )}
            </AuthInformation>
        </StylesHeaderWrapper>
    );
};

export default Header;
