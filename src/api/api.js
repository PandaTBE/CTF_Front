import axios from 'axios';

/**
 * Функция делает get запрос на бэк
 * @param {string} url урл для запроса
 * @param {function} dispatch диспатч в стейт
 * @param {string} actionType тип экшена
 */
export const getRequest = async (url, actionType, dispatch) => {
    try {
        const data = await axios.get(url, { withCredentials: true }).then((resposne) => resposne.data);
        dispatch({ type: actionType, payload: data });
    } catch (error) {
        console.log(error);
    }
};
