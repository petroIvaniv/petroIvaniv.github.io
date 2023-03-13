import {useEffect, useRef, useState} from "react";
import {handleChange} from '../../../../helpers/helpers'
import {Button} from "rsuite";
import styles from './styles.module.scss'




const ReactForm = ({formValues, setFormValues,handleSubmit, setEditMode, editMode}) => {
    console.log('ReactForm render', formValues)

    // const handleSubmit = () => {
    //     console.log(formValues)
    //     setFormValues(initialState)
    //     console.log({
    //         name: nameInputRef.current.value,
    //         password: passwordInputRef.current.value,
    //     })
    // }

    const nameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const validate = () => {
        console.log('passwordInputRef.current.value',nameInputRef.current.value,)
    }

    return(
        // <form>
        //     <label>
        //         Name:
        //         <input
        //             ref={nameInputRef}
        //             type="text"
        //             name="name"
        //             onChange={validate}
        //         />
        //     </label>
        //     <label>
        //         Name:
        //         <input
        //             ref={passwordInputRef}
        //             type="password"
        //             name="password"
        //         />
        //     </label>
        //
        //     <input type="button" value="Submit" onClick={handleSubmit}/>
        // </form>
        <form className={styles.form}>
            <button onClick={()=>setEditMode(prev => !prev)} type='button'> {editMode ? 'Save' : 'Edit'}</button>
            <Button appearance='ghost' onClick={()=>setEditMode(prev => !prev)} >{editMode ? 'Save' : 'Edit'}</Button>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={(e) => handleChange(e,'name', setFormValues)}
                />
            </label>
            <label>
                Name:
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={(e) => handleChange(e,'password', setFormValues)}
                />
            </label>

            <input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
    )
}

export default ReactForm
