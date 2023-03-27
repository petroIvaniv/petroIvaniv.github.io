import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import rickMortyReducer from "./reducers/rickMortyReducer.js";
import apiCount from "./reducers/apiCountReducer.js";
import thunk from "redux-thunk";
import {andriyReducer} from "./reducers/andriyReducer";

const rootReducer = combineReducers({
    mentor: rickMortyReducer,
    apiCount,
    // yaryna: yarynaReducer,
    andriy: andriyReducer,
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

