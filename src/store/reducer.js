export const actionTypes = {
    SET_USER_AUTH: 'SET_USER_AUTH',
    AUTH_HANDLER: 'AUTH_HANDLER',
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
    console.log(action.payload);
    return {
        ...state,
    };
};

// Главный редьюсер для изменения стейта в зависимости от actio type
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_AUTH:
            return setUserAuth(state, action);

        case actionTypes.AUTH_HANDLER:
            return authHandler(state, action);

        default:
            return state;
    }
};

export default reducer;
