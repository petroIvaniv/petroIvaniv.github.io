import { combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import rickMortyReducer from "./reducers/rickMortyReducer.js";

const rootReducer = combineReducers({
    mentor: rickMortyReducer,
    // yaryna: yarynaReducer,
})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers()
);

export default store;
