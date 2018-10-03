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

export const signupSuccess = (payload) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: payload
})

export const signupFail = () => ({
  type: actionTypes.SIGNUP_FAIL,
})


