import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import rickMortyReducer from "./reducers/rickMortyReducer.js";
import apiCount from "./reducers/apiCountReducer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    mentor: rickMortyReducer,
    apiCount
    // yaryna: yarynaReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

