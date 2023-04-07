import { LocationApi } from "../../api/api";

export const orestActiontypes = {
    SET_LOCATION: 'SET_LOCATION',
    SET_INFO: 'SET_INFO'
}

export const orestAction = {
    setLocation: (results) => ({
        type: orestActiontypes.SET_LOCATION,
        results
    }),
    setInfo: (info) => ({
        type: orestActiontypes.SET_INFO,
        info
    })
}

export const getLocationThunk = (activePage) => async (dispatch) => {
    try{
        const {data} = await LocationApi.getLocation(activePage)
        dispatch(orestAction.setLocation(data.results));
        dispatch(orestAction.setInfo(data.info));
    } catch (e) {
        
    }
}