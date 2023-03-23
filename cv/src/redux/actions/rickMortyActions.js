import { CharacterApi } from "../../api/api.js";
import { useDispatch } from "react-redux";

export const rmActionTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_INFO: 'SET_INFO',
    SET_DATA: 'SET_DATA'
}

export const rickMortyActions = {
    setCharacters: (results) =>({
        type: rmActionTypes.SET_CHARACTERS,
        results
    }),
    setInfo: (info) =>({
        type: rmActionTypes.SET_INFO,
        info
    }),
    setData: (data) =>({
        type: rmActionTypes.SET_DATA,
        data
    })
}

export const universalGetUsersThunk = (page) => async (dispatch) => {
    try {
        const {data} = await CharacterApi.getUsers(page)
        dispatch(rickMortyActions.setData(data))
    } catch (e) {

    }
}
