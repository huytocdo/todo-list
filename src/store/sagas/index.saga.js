import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from './../actions/actionTypes';
import { 
  signup,
 } from './auth.sagas';

export function* watchAuth() {
  yield all([
    takeLatest(actionTypes.SIGNUP, signup),
  ])
}