import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../store/context';

const UserData = () => {
    const { state } = useContext(Context);
    const { isAuth } = state;
    const history = useHistory();

    if (!isAuth) history.push('/login');

    return <div>hello</div>;
};

export default UserData;
