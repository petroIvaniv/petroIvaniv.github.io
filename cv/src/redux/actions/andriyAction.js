import {EpisodeApi} from "../../api/api";

export const andriyActionTypes = {
    SET_EPISODE: 'SET_EPISODE',
    SET_INFO: 'SET_INFO',
}
export const andriyAction = {
    setEpisode:(results)=>({
        type:andriyActionTypes.SET_EPISODE,
         results
    }),
    setInfo: (info) =>({
        type: andriyActionTypes.SET_INFO,
        info
    }),
}
 export const getEpisodeThunk =(activePage)=> async (dispatch)=>{
    try {
        const {data} = await EpisodeApi.getEpisode(activePage)
        dispatch(andriyAction.setEpisode(data.results));
        dispatch(andriyAction.setInfo(data.info));
    }catch (e) {

    }
}