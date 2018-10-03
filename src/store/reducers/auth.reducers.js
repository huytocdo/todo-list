import * as actionTypes from './../actions/actionTypes';
import update from 'immutability-helper';
import {errorText} from './../../ultility';

const initialState = {
  error: null,
  loading: false,
  token: null,
  uid: null,
  email: null,
}

const signupStart = (state, action) => {
  return update(state,{
    loading: {$set: true},
    error: {$set: ''},
  });
}

const signupSuccess = (state, action) => {
  return update(state, {
    token: {$set: action.payload.token},
    uid: {$set: action.payload.uid},
    loading: {$set: false},
    error: {$set: ''},
  });
}

const signupFail = (state, action) => {
  return update(state, {
    loading: {$set: false},
    error: {$set: errorText.signup[action.payload.errorMessage]}
  });
}

const signinStart = (state, action) => {
  return update(state, {
    loading: {$set: true},
    error: {$set: ''},
  })
}

const signinSuccess = (state, action) => {
  return update(state, {
    token: {$set: action.payload.token},
    uid: {$set: action.payload.uid},
    email: {$set: action.payload.email},
    loading: {$set: false},
    error: {$set: ''},
  })
}

const signinFail = (state, action) => {
  return update(state, {
    loading: {$set: false},
    error: {$set: errorText.signin[action.payload.errorMessage]}
  })
}

const signout = (state, action) => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("uid");
  return update(state, {
    token: {$set: null},
    uid: {$set: null},
  })
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START: return signupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL: return signupFail(state, action); 
    case actionTypes.SIGNIN_START: return signinStart(state, action);
    case actionTypes.SIGNIN_SUCCESS: return signinSuccess(state, action);
    case actionTypes.SIGNIN_FAIL: return signinFail(state, action);
    case actionTypes.SIGNOUT: return signout(state, action); 
    default: return state;
  }
}

export default reducer;