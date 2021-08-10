import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../store/context';
import { actionTypes } from '../../store/reducer';
import { HelloText, ShowFiles, UserDataWrapper } from './UserData.styles';

/**
 * Компонент для отрисовки страницы юзера
 */
const UserData = () => {
    const { state, dispatch } = useContext(Context);
    const { isAuth, username } = state;
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [isAuth]);

    const showFilesHandler = () => {
        history.push('/files');
        dispatch({ type: actionTypes.SET_SHOW_SPINNER, payload: true });
    };

    return (
        <UserDataWrapper>
            <div>
                <HelloText>Hello, {username}! </HelloText> <ShowFiles onClick={showFilesHandler}>Show your files?</ShowFiles>
            </div>
        </UserDataWrapper>
    );
};

export default UserData;
