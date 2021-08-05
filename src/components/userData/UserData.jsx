import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../store/context';

const UserData = () => {
    const { state } = useContext(Context);
    const { isAuth } = state;
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/login');
        }
        // eslint-disable-next-line
    }, [isAuth]);

    return <div>hello</div>;
};

export default UserData;
