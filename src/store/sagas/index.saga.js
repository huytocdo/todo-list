import { all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from './../actions/actionTypes';
import { 
  signup,
  signin,
  authCheckState,
  authCheckTimeout,
 } from './auth.sagas';

import { 
  fetchTodo
} from './todos.sagas'

export function* watchAuth() {
  yield all([
    takeLatest(actionTypes.SIGNUP, signup),
    takeLatest(actionTypes.SIGNIN, signin),
    takeLatest(actionTypes.AUTH_CHECK_STATE, authCheckState),
    takeLatest(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeout),
  ])
}

export function* watchTodo() {
  yield all([
    takeLatest(actionTypes.FETCH_TODO, fetchTodo)
  ])
}