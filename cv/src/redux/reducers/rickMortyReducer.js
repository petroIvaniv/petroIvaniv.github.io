import { rmActionTypes } from "../actions/rickMortyActions.js";

const initialState = {
    info: {
        count: 200
    },
    results: []
}

const rickMortyReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case rmActionTypes.SET_CHARACTERS:
            return{
                ...state,
                results: action.results
            }
        case rmActionTypes.SET_INFO:
            return{
                ...state,
                info: action.info
            }
        case rmActionTypes.SET_DATA:
            return{
                ...state,
                results: action.data.results,
                info: action.data.info
            }
        default:
            return state
    }
}

export default rickMortyReducer;
