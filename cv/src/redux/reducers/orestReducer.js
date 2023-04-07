import { orestActiontypes } from "../actions/orestAction";

const initialState = {
    info:{
        count: 18
    },
    results:[]
}

export const orestReducer = (state = initialState, action) => {
    switch (action.type) {
        case orestActiontypes.SET_LOCATION:
            return{
                ...state,
                results: action.results
            }
        case orestActiontypes.SET_INFO:
            return{
                ...state,
                info: action.info
            }
        default:
            return state;
    }
}