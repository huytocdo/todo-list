import * as actionTypes from './../actions/actionTypes';
import update from 'immutability-helper';
import {errorText} from './../../ultility';

const initialState = {
  error: null,
  loading: false,
  token: null,
  uid: null,
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
    error: {$set: errorText.signUp[action.payload.errorMessage]}
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START: return signupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL: return signupFail(state, action); 
    default: return state;
  }
}

export default reducer;