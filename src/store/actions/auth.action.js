import * as actionTypes from './actionTypes';

export const signup = (email, password) => ({
  type: actionTypes.SIGNUP,
  payload: {
    email,
    password,
  }
})

export const signupStart = () => ({
  type: actionTypes.SIGNUP_START,
})

export const signupSuccess = (token, uid, email) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: {
    token,
    uid,
    email
  }
})

export const signupFail = (errorMessage) => ({
  type: actionTypes.SIGNUP_FAIL,
  payload: {
    errorMessage,
  }
})

export const signin = (email, password) => ({
  type: actionTypes.SIGNIN,
  payload: {
    email,
    password,
  }
})

export const signinStart = () => ({
  type: actionTypes.SIGNIN_START,
})

export const signinSuccess = (token, uid, email) => ({
  type: actionTypes.SIGNIN_SUCCESS,
  payload: {
    token,
    uid,
    email
  }
})

export const signinFail = (errorMessage) => ({
  type: actionTypes.SIGNIN_FAIL,
  payload: {
    errorMessage,
  }
})




