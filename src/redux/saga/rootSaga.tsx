import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga'
// import authenticationSagas from 'redux/authentication/authenticationSaga';
// import listinSagas from 'redux/listing/listingSaga';

export default function* rootSaga() {
    yield all([
        studentSaga
        // ...authenticationSagas,
        // ...listinSagas,
    ]);
}