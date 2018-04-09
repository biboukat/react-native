import * as firebase from 'firebase';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* addCreditalsToStore(action) {
  const { uid, password } = action;
  yield put({type: "ADD_CREDITALS_TO_STORE", uid, password});
}

export function* watchActions() {
  yield takeEvery('SUCCESS_AUTHORIZATAION', addCreditalsToStore);
}

export const fetchUserName = (email, password) => {
    const ref = firebase.database().ref('users').orderByChild("email").equalTo(email);
    return ref.once('value');
}
