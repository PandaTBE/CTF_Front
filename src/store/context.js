import { createContext } from 'react';

const Context = createContext({
    isAuth: false,
    loginError: false,
    registerError: false,
    successRegistration: false,
    successLogin: false,
    logoutSuccess: false,
    logoutError: false,
});

export default Context;
