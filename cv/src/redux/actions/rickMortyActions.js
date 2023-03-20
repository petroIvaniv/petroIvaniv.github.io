export const rmActionTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_INFO: 'SET_INFO'
}

export const rickMortyActions = {
    setCharacters: (results) =>({
        type: rmActionTypes.SET_CHARACTERS,
        results
    }),
    setInfo: (info) =>({
        type: rmActionTypes.SET_INFO,
        info
    })
}
