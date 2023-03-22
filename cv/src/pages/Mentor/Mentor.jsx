import {useEffect, useState} from "react";
import ReactForm from "./components/Form/ReactForm";
import {CharacterApi} from "../../api/api";
import {Pagination} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { rickMortyActions } from "../../redux/actions/rickMortyActions.js";

const initialState = {
    name: '',
    password: ''
}
const editUser = {name: 'Ihor', password: '123'}

const Mentor = ({Component, isAdmin = false, form}) => {
    const dispatch = useDispatch();
    const users = useSelector((store)=> store.mentor.results)
    const info = useSelector((store)=> store.mentor.info)
    const [activePage, setActivePage] = useState(1);
    const [editMode, setEditMode] = useState(true);
    const [formValues, setFormValues] = useState(editMode ? editUser : initialState)


    console.log('activePage',activePage)


    let name = "ne Ihor"
    const handleClick = (user) => alert(user.name)


    const universalGetUsers = async () => {
        try{
            const {data} = await CharacterApi.getUsers(activePage)
            // setUsers(data.results)
            // setInfo(data.info)
            dispatch(rickMortyActions.setCharacters(data.results))
            dispatch(rickMortyActions.setInfo(data.info))
        } catch (e) {

        }
    }

    useEffect(()=>{
        setFormValues(editMode ? editUser : initialState)
    },[editMode])

    useEffect(()=>{
    }, []);

    useEffect(()=>{
        universalGetUsers()
    },[activePage])



    return(
        <div>
            <h1>Mentor</h1>
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info?.count}
                limit={20}
                maxButtons={10}
                activePage={activePage}
                onChangePage={setActivePage}
            />
            <Component
                name={name}
                users={users}
                handleClick={handleClick}
            />
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info?.count}
                limit={20}
                maxButtons={10}
                activePage={activePage}
                onChangePage={setActivePage}
            />
            {/*{form && <ReactForm*/}
            {/*    setFormValues={setFormValues}*/}
            {/*    formValues={formValues}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    setEditMode={setEditMode}*/}
            {/*    editMode={editMode}*/}
            {/*/>}*/}




        </div>
    )
}

export default Mentor
