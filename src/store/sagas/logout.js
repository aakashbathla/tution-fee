import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import axios from "axios";

import * as actions from "../actions/index";

export function* logoutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userId");
  yield put(actions.logoutSucceed());
  yield put(push('/'));
}
