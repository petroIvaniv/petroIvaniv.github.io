import {andriyActionTypes} from "../actions/andriyAction.js";

const initialState = {
    info:{
        count:20
    },
    results:[]
}
export const andriyReducer = (state = initialState, action)=>{
    console.log(action)
    switch (action.type) {
        case andriyActionTypes.SET_EPISODE:
            return {
                ...state,
                results:action.results
            }
        case andriyActionTypes.SET_INFO:
            return {
                ...state,
                info: action.info
            }
        default:
            return state;
    }
}