import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import rickMortyReducer from "./reducers/rickMortyReducer.js";
import apiCount from "./reducers/apiCountReducer.js";
import thunk from "redux-thunk";
import {andriyReducer} from "./reducers/andriyReducer";
import { orestReducer } from "./reducers/orestReducer.js";

const rootReducer = combineReducers({
    mentor: rickMortyReducer,
    apiCount,
    // yaryna: yarynaReducer,
    andriy: andriyReducer,
    orest: orestReducer
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

