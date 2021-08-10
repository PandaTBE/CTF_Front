import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRequest } from './api/api';
import { AppWrapper, BodyWrapper, Spinner } from './App.styles';
import Files from './components/files/Files';
import Header from './components/header/Header';
import Login from './components/login/Login';
import UserData from './components/userData/UserData';
import { urls } from './constants/urls';
import Context from './store/context';
import reducer, { actionTypes } from './store/reducer';

// Главная компонента, отвечающая за роутинг и отрисовку хедера
const App = () => {
    const initilaState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initilaState);
    const { enqueueSnackbar } = useSnackbar();

    const { showSpinner } = state;

    useEffect(() => {
        getRequest(urls.HOST, actionTypes.AUTH_HANDLER, dispatch);

        // eslint-disable-next-line
    }, []);

    return (
        <Context.Provider value={{ state, dispatch, enqueueSnackbar }}>
            <AppWrapper>
                {showSpinner && (
                    <Spinner>
                        <CircularProgress />
                    </Spinner>
                )}

                <Header />
                <BodyWrapper>
                    <Switch>
                        <Route exact path='/' render={() => <UserData />} />
                        <Route exact path='/login' render={() => <Login />} />
                        <Route exact path='/files' render={() => <Files />} />
                    </Switch>
                </BodyWrapper>
            </AppWrapper>
        </Context.Provider>
    );
};

export default App;
