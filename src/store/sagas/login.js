import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import axios from "axios";

import * as actions from "../actions/index";

// export function* checkLoginTimeoutSaga(action) {
//   yield delay(action.expirationTime * 1000);
//   yield put(actions.logout());
// }

export function* loginUserSaga(action) {
  yield put(actions.loginStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url ="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBdIXOiDO1mjokeoHen7L2oIlSV38yNR18";
  try {
    const response = yield axios.post(url, authData);

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.loginSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkLoginTimeout(response.data.expiresIn));
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(actions.loginFail(error.response.data.error));
  }
}

// export function* loginCheckStateSaga(action) {
//   const token = yield localStorage.getItem("token");
//   if (!token) {
//     yield put(actions.logout());
//   } else {
//     const expirationDate = yield new Date(
//       localStorage.getItem("expirationDate")
//     );
//     if (expirationDate <= new Date()) {
//       yield put(actions.logout());
//     } else {
//       const userId = yield localStorage.getItem("userId");
//       yield put(actions.authSuccess(token, userId));
//       yield put(
//         actions.checkAuthTimeout(
//           (expirationDate.getTime() - new Date().getTime()) / 1000
//         )
//       );
//     }
//   }
// }
