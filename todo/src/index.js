import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import toDoApp from './reducers';
import {loadToDoList} from './actions';
import rootSaga from './sagas';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// saga를 redux stroe에 연결하기 위해서 미들웨어 사용
const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

// saga 실행
sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
