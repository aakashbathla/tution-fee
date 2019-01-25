import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  checkLoginTimeoutSaga,
  loginUserSaga,
  loginCheckStateSaga
} from "./login";
import {
  logoutSaga
} from './logout';

export function* watchLogin() {
  yield all([
    // takeEvery(actionTypes.LOGIN_CHECK_TIMEOUT, checkLoginTimeoutSaga),
    takeEvery(actionTypes.LOGIN_USER, loginUserSaga)
    // takeEvery(actionTypes.LOGIN_CHECK_STATE, loginCheckStateSaga)
  ]);
}
export function* watchLogout() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
  ]);
}