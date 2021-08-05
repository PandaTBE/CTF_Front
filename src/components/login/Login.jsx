import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getRequest, postRequest } from '../../api/api';
import { urls } from '../../constants/urls';
import Context from '../../store/context';
import { actionTypes } from '../../store/reducer';
import { LoginAndRegisterWrapper, LoginFormWrapper, LoginHeader, LoginOrRegister, LoginWrapper, StyledButton, StyledTextField, TextFieldsWrapper } from './Login.styles';

/**
 * Компонент для отрисвоки окошка с логином или регистрацией
 */
const Login = () => {
    const { dispatch, state, enqueueSnackbar } = useContext(Context);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { loginError, registerError, successRegistration, successLogin, isAuth } = state;
    const history = useHistory();

    useEffect(() => {
        if (isAuth) history.push('/');
    }, [isAuth]);

    useEffect(() => {
        if (loginError) {
            enqueueSnackbar('Login error', {
                variant: 'error',
            });
            dispatch({ type: actionTypes.SET_LOGIN_ERROR, payload: false });
        }

        // eslint-disable-next-line
    }, [loginError]);

    useEffect(() => {
        if (registerError) {
            enqueueSnackbar('Register error', {
                variant: 'error',
            });
            dispatch({ type: actionTypes.SET_REGISTER_ERROR, payload: false });
        }
        // eslint-disable-next-line
    }, [registerError]);

    useEffect(() => {
        if (successRegistration) {
            enqueueSnackbar('Success registration', {
                variant: 'success',
            });
            dispatch({ type: actionTypes.SET_SUCCESS_REGISTRATION, payload: false });
        }

        // eslint-disable-next-line
    }, [successRegistration]);

    useEffect(() => {
        if (successLogin) {
            enqueueSnackbar('Success login', {
                variant: 'success',
            });
            getRequest(urls.HOST, actionTypes.AUTH_HANDLER, dispatch);
            dispatch({ type: actionTypes.SET_SUCCESS_LOGIN, payload: false });
        }
        // eslint-disable-next-line
    }, [successLogin]);

    const loginHandler = () => setIsLogin(true);
    const registerHandler = () => setIsLogin(false);

    const usernameHandler = (e) => {
        setUsernameError(false);
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPasswordError(false);
        setPassword(e.target.value);
    };

    const loginOrRegisterHandler = () => {
        if (username && password) {
            const urlForRequest = isLogin ? urls.LOGIN : urls.REGISTER;
            const type = isLogin ? actionTypes.SET_LOGIN_INFO : actionTypes.SET_REGISTER_INFO;
            const body = {
                login: username,
                password,
            };

            postRequest(urlForRequest, type, dispatch, body);
            setUsername('');
            setPassword('');
            setIsLogin(true);
        } else {
            if (!username) setUsernameError(true);
            if (!password) setPasswordError(true);
        }
    };

    return (
        <LoginWrapper>
            <LoginFormWrapper boxShadow={1}>
                <LoginHeader>{isLogin ? 'Login' : 'Register'}</LoginHeader>
                <TextFieldsWrapper>
                    <StyledTextField
                        error={usernameError ? true : false}
                        helperText={usernameError ? 'This field is required' : null}
                        value={username}
                        onChange={usernameHandler}
                        label={'Username'}
                        variant='outlined'
                    />
                    <StyledTextField
                        error={passwordError ? true : false}
                        helperText={passwordError ? 'This field is required' : null}
                        value={password}
                        onChange={passwordHandler}
                        label={'Password'}
                        variant='outlined'
                    />
                </TextFieldsWrapper>
                <StyledButton onClick={loginOrRegisterHandler} variant='outlined'>
                    {isLogin ? 'Login' : 'Register'}
                </StyledButton>

                <LoginAndRegisterWrapper>
                    <LoginOrRegister onClick={loginHandler}>Login</LoginOrRegister> / <LoginOrRegister onClick={registerHandler}>Register</LoginOrRegister>
                </LoginAndRegisterWrapper>
            </LoginFormWrapper>
        </LoginWrapper>
    );
};

export default Login;
