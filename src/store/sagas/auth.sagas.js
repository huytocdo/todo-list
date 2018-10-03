import { put } from 'redux-saga/effects';
import { delay } from "redux-saga";
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
    yield localStorage.setItem("email", response.data.email);
    yield put(
      actions.signupSuccess(response.data.idToken, response.data.localId, response.data.email)
    );
    yield put(actions.authCheckTimeout(response.data.expiresIn * 1000))
  } catch(error) {
    yield put(actions.signupFail(error.response.data.error.message));
  }
}

export function* signin(action) {
  yield put(actions.signinStart());
  const accountData = {
    ...action.payload,
    returnSecureToken: true,
  }
  const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA_HJGN9TNLdwFf8WtYugl4GEHyedzoLiM";
  try {
    const response = yield axios.post(url, accountData);
    console.log(response)
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("uid", response.data.localId);
    yield localStorage.setItem("email", response.data.email);
    yield put(
      actions.signinSuccess(response.data.idToken, response.data.localId, response.data.email)
    );
    yield put(actions.authCheckTimeout(response.data.expiresIn))
  } catch(error) {
    yield put(actions.signinFail(error.response.data.error.message));
  }
}

export function* authCheckState() {
  const token = yield localStorage.getItem("token");
  if(!token) {
    yield put(actions.signout())
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if(expirationDate <= new Date()) {
      yield put(actions.signout())
    } else {
      const uid = yield localStorage.getItem("uid");
      const email = yield localStorage.getItem("email");
      yield put(actions.signinSuccess(token, uid, email));
      yield put(
        actions.authCheckTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}

export function* authCheckTimeout(action) {
  yield delay(action.payload.expirationTime * 1000);
  yield put(actions.signout());
}