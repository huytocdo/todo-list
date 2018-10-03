import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './../actions/index.action';

export function* addTodo(action) {
  yield put(actions.addTodoStart());
  const queryParams = '?auth=' + action.payload.token;
  try {
    const response = yield axios.post(
      "https://todos-list-021191.firebaseio.com/todo.json" + queryParams,
      action.payload
    );
    yield put(actions.addTodoSuccess(response.data.name, action.payload));
  } catch (error) {
    yield put(actions.addTodoFail(error));
  }
}

export function* fetchTodo(action) {
  yield put(actions.fetchTodoStart());
  const queryParams = '?auth=' + action.payload.token + '&orderBy="uid"&equalTo="' + action.payload.uid + '"';
  try {
    const response = yield axios.get("https://todos-list-021191.firebaseio.com/todo.json" + queryParams);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}