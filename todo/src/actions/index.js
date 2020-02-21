export const ADD_TODO = 'ADD_TODO';
//외부서버에서 todo-list를 불러온다
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
//load된 todo-list를 렌더링한다
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST'; 
export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

export function addTodo(title) {
    return {
        type: ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime()).toString(),
            title
        }
    };
}

export function loadToDoList() {
    return {
        type: LOAD_TODO_LIST
    };
}

export function handleAuthenticationCallback() {
    return {
        type: HANDLE_AUTHENTICATION_CALLBACK
    };
}