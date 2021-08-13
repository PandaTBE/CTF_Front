import axios from 'axios';
import download from 'downloadjs';

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
        dispatch({ type: actionType, payload: { error } });
    }
};

/**
 * Функция делает get запрос на бэк
 * @param {string} url урл для запроса
 * @param {function} dispatch диспатч в стейт
 * @param {string} actionType тип экшена
 * @param {object} body боди запроса
 */
export const postRequest = async (url, actionType, dispatch, body, isFile = false) => {
    try {
        const data = await axios.post(url, body, { withCredentials: true, headers: isFile ? { 'Content-Type': 'multipart/form-data' } : null }).then((resposne) => resposne.data);
        dispatch({ type: actionType, payload: data });
    } catch (error) {
        dispatch({ type: actionType, payload: { error } });
    }
};

/**
 * Функция делает get запрос на бэк
 * @param {string} url урл для запроса
 */
export const getFileRequest = async (url, fileName) => {
    try {
        const data = await axios.get(url, { withCredentials: true, responseType: 'blob' }).then((resposne) => resposne.data);
        download(data, fileName, data.type);
        return data;
    } catch (error) {
        return { error };
    }
};
