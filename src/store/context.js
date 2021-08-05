import { createContext } from 'react';

const Context = createContext({
    isAuth: false,
    loginError: false,
    registerError: false,
    successRegistration: false,
    successLogin: false,
});

export default Context;
