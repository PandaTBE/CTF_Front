export const actionTypes = {
    SET_USER_AUTH: 'SET_USER_AUTH',
    AUTH_HANDLER: 'AUTH_HANDLER',
    SET_LOGIN_INFO: 'SET_LOGIN_INFO',
    SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
    SET_REGISTER_INFO: 'SET_REGISTER_INFO',
    SET_REGISTER_ERROR: 'SET_REGISTER_ERROR',
    SET_SUCCESS_REGISTRATION: 'SET_SUCCESS_REGISTRATION',
    SET_SUCCESS_LOGIN: 'SET_SUCCESS_LOGIN',
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
        console.log(action.payload);
        return {
            ...state,
            isAuth: true,
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

        default:
            return state;
    }
};

export default reducer;
