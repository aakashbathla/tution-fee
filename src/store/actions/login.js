import * as actionTypes from "./actionTypes";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (token, userId) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};

export const checkLoginTimeout = expirationTime => {
  return {
    type: actionTypes.LOGIN_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
};

export const login = (email, password, isSignup) => {
  return {
    type: actionTypes.LOGIN_USER,
    email: email,
    password: password,
    isSignup: isSignup
  };
};

export const setLoginRedirectPath = path => {
  return {
    type: actionTypes.SET_LOGIN_REDIRECT_PATH,
    path: path
  };
};

export const loginCheckState = () => {
  return {
    type: actionTypes.LOGIN_CHECK_STATE
  };
};
