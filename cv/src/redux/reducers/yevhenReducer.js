import { yevhenActionTypes } from "../actions/yevhenAction";

const initialState = {
    info: {
        count: 200
    },
    results: []
}

const yevhenReducer = (state = initialState, action) => {
    switch(action.type) {
        case yevhenActionTypes.SET_LOCATION:
            return{
                ...state,
                results: action.results,
            }
        case yevhenActionTypes.SET_INFO:
            return{
                ...state,
                info: action.info,
            }
        case yevhenActionTypes.SET_DATA:
            return{
                ...state,
                results: action.data.results,
                info: action.data.info,
        }
        default:
            return state;
    }
}

export default yevhenReducer;