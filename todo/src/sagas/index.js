import {all, call, put, takeEvery} from 'redux-saga/effects';
import {LOAD_TODO_LIST, RENDER_TODO_LIST} from '../actions';
import {takeLatest} from 'redux-saga/effects';
import {HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED} from '../actions';
import {handleAuthentication} from '../Auth';

// generator function
export function* fetchToDoList() {
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
    const response = yield call(fetch, endpoint);
    // endpoint 에서 data 로딩이 끝나면
    const data = yield response.json();
    // put 함수를 통해 RENDER_TODO_LIST action과 todo-items의 새 리스트를 dispatch 한다.
    yield put({type:RENDER_TODO_LIST, toDoList: data});
}

export function* loadToDoList() {
    yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({type: USER_PROFILE_LOADED, user});
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([loadToDoList(), handleAuthenticationCallback()]);
}


//put : redux store에 dispatch
//all : all 함수를 통해 saga들을 하나로 묶어줄 수 있다.