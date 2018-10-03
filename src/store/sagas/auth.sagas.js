import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './../actions/index.action';

export function* signup(action) {
  yield put(actions.signupStart());
  const accountData = {
    ...action.payload
  }
  const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA_HJGN9TNLdwFf8WtYugl4GEHyedzoLiM";
  try {
    const response = yield axios.post(url, accountData);
    
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("uid", response.data.localId);
    yield put(
      actions.signupSuccess(response.data.idToken, response.data.localId, response.data.email)
    );
  } catch(error) {
    yield put(actions.signupFail(error.response.data.error.message));
  }
}

export function* signin(action) {
  yield put(actions.signinStart());
  const accountData = {
    ...action.payload
  }
  const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA_HJGN9TNLdwFf8WtYugl4GEHyedzoLiM";
  try {
    const response = yield axios.post(url, accountData);
    
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("uid", response.data.localId);
    yield put(
      actions.signinSuccess(response.data.idToken, response.data.localId, response.data.email)
    );
  } catch(error) {
    yield put(actions.signinFail(error.response.data.error.message));
  }
}