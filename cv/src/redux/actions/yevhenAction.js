import { LocationApi } from "../../api/api";

export const yevhenActionTypes = {
    SET_LOCATION: 'SET_LOCATION',
    SET_INFO: 'SET_INFO',
    SET_DATA: 'SET_DATA',
}

export const yevhenAction = {
    setLocation: (results) => ({
        type: yevhenActionTypes.SET_LOCATION,
        results
    }),
    setInfo: (info) => ({
        type: yevhenActionTypes.SET_INFO,
        info
    }),
    setData: (data) => ({
        type: yevhenActionTypes.SET_DATA,
        data
    })
}

export const universalGetUsersThunk = (activePage) => async (dispatch) => {
    try {
        const {data} = await LocationApi.getLocation(activePage);
        dispatch(yevhenAction.setData(data));
    }
    catch (e) {

    }
}