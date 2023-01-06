import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./reducer/reducer";


import studentSaga from "./saga/studentSaga";
import rootReducer from "./reducer/rootReducer";
import rootSaga from './saga/rootSaga'

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    usersReducer,
    applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);
export default store