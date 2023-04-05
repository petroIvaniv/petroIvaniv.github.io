import {useEffect, useState} from "react";

const EditUser = ({addInfo, data, handleGIEdit}) => {
    // useEffect(() => {
    //     addInfo();
    // }, [])
    const [formValue, setFormValue] = useState(data.generalInfo)
    console.log(formValue)
    const handleInputChange = (key, value) =>{
        setFormValue((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    return (<>
        <h1>EditUser</h1>
            <input
                type="text"
                value={formValue?.fullName}
                onChange={(e)=> handleInputChange('fullName', e.target.value)}
            />
            <input
                type="text"
                value={formValue?.position}
                onChange={(e)=> handleInputChange('position', e.target.value)}
            />
            <textarea
                value={formValue?.summary}
                onChange={(e)=> handleInputChange('summary', e.target.value)}
            />
            <button type='button' onClick={()=>handleGIEdit(formValue)}>Save general info</button>
    </>
        )
};

export default EditUser
