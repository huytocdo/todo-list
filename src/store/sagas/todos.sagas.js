import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './../actions/index.action';

export function* fetchTodo(action) {
  yield put(actions.fetchTodoStart());
  const queryParams = `?auth=${action.payload.token}`;
  try {
    const response = yield axios.get(`https://todos-list-021191.firebaseio.com/todo/${action.payload.uid}.json` + queryParams);
    yield put(actions.fetchTodoSuccess(response.data))
  } catch (error) {
    yield put(actions.fetchTodoFail())
  }
}

export function* saveTodos(action) {
  yield put(actions.saveTodosStart());
  try {
    const queryParams = `?auth=${action.payload.token}`;
    yield axios.put(`https://todos-list-021191.firebaseio.com/todo/${action.payload.uid}.json` + queryParams, action.payload.todos);
    yield put(actions.saveTodosSuccess());
  } catch(error) {
    yield put(actions.saveTodosFail());
  }
}
