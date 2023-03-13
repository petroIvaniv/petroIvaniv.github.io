export const handleChange = (e, key, callback)=>{
    callback(prevState => {
        return {
            ...prevState,
            [key]: e.target.value
        }
    })
}
