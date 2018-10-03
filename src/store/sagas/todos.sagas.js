import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './../actions/index.action';

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