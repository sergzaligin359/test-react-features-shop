import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createRootReducer from 'redux/reducers';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import Layout from 'pages/Layout';

import './main.css';

const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <Layout />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
)
