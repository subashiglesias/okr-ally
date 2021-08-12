import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './javascript/reducers';
import rootSaga from "./javascript/saga/root-saga";
import ErrorBoundary from "./javascript/components/ErrorBoundary";

import './index.css';
import App from './javascript/components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, composeEnhancers(middlewares));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
        </ErrorBoundary>,
    </Provider>,
    document.getElementById('root')
);

