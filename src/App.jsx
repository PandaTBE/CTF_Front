import { useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getRequest } from './api/api';
import { AppWrapper } from './App.styles';
import Header from './components/header/Header';
import { urls } from './constants/urls';
import Context from './store/context';
import reducer, { actionTypes } from './store/reducer';

// Главная компонента, отвечающая за роутинг и отрисовку хедера
const App = () => {
    const initilaState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initilaState);

    useEffect(() => {
        getRequest(urls.LOGIN, actionTypes.AUTH_HANDLER, dispatch);
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <AppWrapper>
                <Header />
                <Switch>
                    <Route path='/login' />
                </Switch>
            </AppWrapper>
        </Context.Provider>
    );
};

export default App;
