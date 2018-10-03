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
    let payload = yield {
      token: response.data.idToken,
      uid: response.data.localId
    };
    console.log(response, payload)
    yield put(
      actions.signupSuccess(payload)
    );
  } catch(error) {
    yield put(actions.signupFail(error.response.data.error));
  }
}