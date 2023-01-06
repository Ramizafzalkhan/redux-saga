import { all, fork } from 'redux-saga/effects';

import studentSaga from './studentSaga'

export default function* rootSaga() {
    yield all([fork(studentSaga)]);
}