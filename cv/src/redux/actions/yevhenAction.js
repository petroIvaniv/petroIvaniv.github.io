export const yevhenActionTypes = {
    SET_LOCATION: 'SET_LOCATION',
    SET_INFO: 'SET_INFO'
}

export const yevhenAction = {
    setLocation: (results) => ({
        type: yevhenActionTypes.SET_LOCATION,
        results
    }),
    setInfo: (info) => ({
        type: yevhenActionTypes.SET_INFO,
        info
    })
}