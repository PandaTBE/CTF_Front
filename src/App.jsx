import { useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRequest } from './api/api';
import { AppWrapper, BodyWrapper } from './App.styles';
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

    useEffect(() => {
        getRequest(urls.HOST, actionTypes.AUTH_HANDLER, dispatch);
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <AppWrapper>
                <Header />
                <BodyWrapper>
                    <Switch>
                        <Route exact path='/' render={() => <UserData />} />
                        <Route path='/login' render={() => <Login />} />
                    </Switch>
                </BodyWrapper>
            </AppWrapper>
        </Context.Provider>
    );
};

export default App;
