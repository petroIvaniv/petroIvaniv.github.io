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