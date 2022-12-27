import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer/reducer";
import studentSaga from "./saga/studentSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(studentSaga);
export default store