import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getRequest } from '../../api/api';
import { urls } from '../../constants/urls';
import Context from '../../store/context';
import { actionTypes } from '../../store/reducer';

const UserData = () => {
    const { state, dispatch } = useContext(Context);
    const { isAuth } = state;
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/login');
        }
    }, [isAuth]);

    return <div>hello</div>;
};

export default UserData;
