
import { combineReducers } from "redux";
import usersReducer from "./reducer";
// import { routerReducer, RouterState } from 'react-router-redux'
const rootReducer = combineReducers({
    user: usersReducer
})
export default rootReducer