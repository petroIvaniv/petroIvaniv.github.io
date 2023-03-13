import {useEffect, useState} from "react";
import ReactForm from "./components/Form/ReactForm";

const initialState = {
    name: '',
    password: ''
}
const editUser = {name: 'Ihor', password: '123'}

const Mentor = ({Component, isAdmin = false, form}) => {
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(true);
    const [formValues, setFormValues] = useState(editMode ? editUser : initialState)

    let name = "ne Ihor"
    const handleClick = (user) => alert(user.name)
    console.log('Mentor render')
    const handleSubmit = ()=>{
        console.log(formValues)
    }


    useEffect(()=>{
        setFormValues(editMode ? editUser : initialState)
    },[editMode])

    useEffect(()=>{
        {isAdmin && fetch("https://rickandmortyapi.com/api/character")
                .then(data => data.json())
                .then(res => {
                    // console.log(res.results)
                    setUsers(res.results)
                    // console.log('moreUsers', moreUsers)
                })}
    }, []);

    return(
        <div>
            <h1>Mentor</h1>
            {isAdmin && <Component
                name={name}
                users={users}
                handleClick={handleClick}
            />}
            {form && <ReactForm
                setFormValues={setFormValues}
                formValues={formValues}
                handleSubmit={handleSubmit}
                setEditMode={setEditMode}
                editMode={editMode}
            />}




        </div>
    )
}

export default Mentor
