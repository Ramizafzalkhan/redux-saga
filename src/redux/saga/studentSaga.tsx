import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../actions/actions";

function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}
function* getUsersFetch(): any {
    const users = yield call(usersFetch);
    console.log('wprking')
    yield put({ type: GET_USERS_SUCCESS, users })

}

export default function* studentSaga() {
    yield takeEvery(GET_USERS_FETCH, getUsersFetch);

}