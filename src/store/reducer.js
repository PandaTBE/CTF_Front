export const actionTypes = {
    SET_USER_AUTH: 'SET_USER_AUTH',
    AUTH_HANDLER: 'AUTH_HANDLER',
    SET_LOGIN_INFO: 'SET_LOGIN_INFO',
    SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
    SET_REGISTER_INFO: 'SET_REGISTER_INFO',
    SET_REGISTER_ERROR: 'SET_REGISTER_ERROR',
    SET_SUCCESS_REGISTRATION: 'SET_SUCCESS_REGISTRATION',
    SET_SUCCESS_LOGIN: 'SET_SUCCESS_LOGIN',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    SET_LOGOUT_ERROR: 'SET_LOGOUT_ERROR',
    SET_LOGOUT_SUCCESS: 'SET_LOGOUT_SUCCESS',
    SET_SHOW_SPINNER: 'SET_SHOW_SPINNER',
    SET_FILES: 'SET_FILES',
    GET_FILES: 'GET_FILES',
    SET_FILES_ERROR: 'SET_FILES_ERROR',
    FILE_UPLOAD: 'FILE_UPLOAD',
    SET_FILE_UPLOADED: 'SET_FILE_UPLOADED',
    SET_FILE_UPLOAD_ERROR: 'SET_FILE_UPLOAD_ERROR',
};

// Функция для изменения флага авторизации
const setUserAuth = (state, action) => {
    return {
        ...state,
        isAuth: action.payload,
    };
};

// Функция для проверки авторизации
const authHandler = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            isAuth: true,
            username: action.payload.Username,
        };
    } else {
        return {
            ...state,
            isAuth: false,
        };
    }
};

// Функция для записи информации об логине
const setLoginInfo = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            successLogin: true,
        };
    } else {
        return {
            ...state,
            loginError: true,
        };
    }
};

// Функция для изменения флага об ошибке логина
const setLoginError = (state, action) => {
    return {
        ...state,
        loginError: action.payload,
    };
};

// Функция для обработки ответа регистрации
const setRegisterInfo = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            successRegistration: true,
        };
    } else {
        return {
            ...state,
            registerError: true,
        };
    }
};

// Функция для изменения флага ошибки при регситрации
const setRegisterError = (state, action) => {
    return {
        ...state,
        registerError: action.payload,
    };
};

// Изменение флага об успешной регистрации
const setSuccessRegistration = (state, action) => {
    return {
        ...state,
        successRegistration: action.payload,
    };
};

// Изменение флага при успешном логине
const setSuccessLogin = (state, action) => {
    return {
        ...state,
        successLogin: action.payload,
    };
};

// Изменение флага о успешном выходе
const logoutSuccess = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            logoutSuccess: true,
            isAuth: false,
        };
    } else {
        return {
            ...state,
            logoutError: true,
        };
    }
};

// Изменение флага вручную об выходе
const setLogutSuccess = (state, action) => {
    return {
        ...state,
        logoutSuccess: action.payload,
    };
};

// Изменение флага о ошибке выхода
const setLogoutError = (state, action) => {
    return {
        ...state,
        logoutError: action.payload,
    };
};

// Изменение флага для показа спинера
const setShowSpinenr = (state, action) => {
    return {
        ...state,
        showSpinner: action.payload,
    };
};

// Функция для получения всех фалйлов
const getFiles = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            files: action.payload,
            showSpinner: false,
        };
    } else {
        return {
            ...state,
            getFilesError: true,
            showSpinner: false,
        };
    }
};

// ИЗменение флага об ошибке при получении файлов
const setFilesError = (state, action) => {
    return {
        ...state,
        getFilesError: action.payload,
    };
};

// Пост файла
const fileUpload = (state, action) => {
    if (!action.payload.error) {
        return {
            ...state,
            isFileUploaded: true,
        };
    } else {
        return {
            ...state,
            fileUploadError: true,
        };
    }
};

// Установка флага, что фалй загружен
const setFileUploaded = (state, action) => {
    return {
        ...state,
        isFileUploaded: action.payload,
    };
};

// ИЗменение флага при ошибке получения файла
const setFileUploadError = (state, action) => {
    return {
        ...state,
        fileUploadError: action.payload,
    };
};

// Главный редьюсер для изменения стейта в зависимости от actio type
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_AUTH:
            return setUserAuth(state, action);

        case actionTypes.AUTH_HANDLER:
            return authHandler(state, action);

        case actionTypes.SET_LOGIN_INFO:
            return setLoginInfo(state, action);

        case actionTypes.SET_LOGIN_ERROR:
            return setLoginError(state, action);

        case actionTypes.SET_REGISTER_INFO:
            return setRegisterInfo(state, action);

        case actionTypes.SET_REGISTER_ERROR:
            return setRegisterError(state, action);

        case actionTypes.SET_SUCCESS_REGISTRATION:
            return setSuccessRegistration(state, action);

        case actionTypes.SET_SUCCESS_LOGIN:
            return setSuccessLogin(state, action);

        case actionTypes.LOGOUT_SUCCESS:
            return logoutSuccess(state, action);

        case actionTypes.SET_LOGOUT_ERROR:
            return setLogoutError(state, action);

        case actionTypes.SET_LOGOUT_SUCCESS:
            return setLogutSuccess(state, action);

        case actionTypes.SET_SHOW_SPINNER:
            return setShowSpinenr(state, action);

        case actionTypes.GET_FILES:
            return getFiles(state, action);

        case actionTypes.SET_FILES_ERROR:
            return setFilesError(state, action);

        case actionTypes.FILE_UPLOAD:
            return fileUpload(state, action);

        case actionTypes.SET_FILE_UPLOAD_ERROR:
            return setFileUploadError(state, action);

        case actionTypes.SET_FILE_UPLOADED:
            return setFileUploaded(state, action);

        default:
            return state;
    }
};

export default reducer;
