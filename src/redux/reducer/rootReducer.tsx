import { combineReducers } from "redux";
import user from '../reducer/reducer'

const rootReducer = combineReducers({
    entities: combineReducers({
        users: user,
    }),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export interface ActionInterface {
    type: string;
    payload: any;
}

