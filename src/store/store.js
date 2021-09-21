import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { studentReducer } from "../reducers/studentReducer";
import { registro } from "../reducers/uiReducer";
import { programaReducer } from "../reducers/programaReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer,
    ui: registro,
    student: studentReducer,
    programa: programaReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)