import { createContext } from 'react';

const Context = createContext({
    isAuth: false,
    loginError: false,
    registerError: false,
    successRegistration: false,
    successLogin: false,
    logoutSuccess: false,
    logoutError: false,
    username: '',
    showSpinner: false,
    files: null,
    getFilesError: false,
    isFileUploaded: false,
    fileUploadError: false,
});

export default Context;
