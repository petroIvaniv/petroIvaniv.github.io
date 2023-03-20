import {useEffect, useState} from "react";
import ReactForm from "./components/Form/ReactForm";
import {CharacterApi} from "../../api/api";
import {Pagination} from "rsuite";

const initialState = {
    name: '',
    password: ''
}
const editUser = {name: 'Ihor', password: '123'}

const Mentor = ({Component, isAdmin = false, form}) => {
    const [users, setUsers] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [info, setInfo] = useState({});
    const [editMode, setEditMode] = useState(true);
    const [formValues, setFormValues] = useState(editMode ? editUser : initialState)


    console.log('activePage',activePage)


    let name = "ne Ihor"
    const handleClick = (user) => alert(user.name)
    const handleSubmit = ()=>{
        console.log(formValues)
    }

    const getUsers = async () => {
        try{
            // const response = await  fetch("https://rickandmortyapi.com/api/character")
            // const data = await response.json()

            const {data} = await CharacterApi.getCharacters()
            setUsers(data.results)
            setInfo(data.info)
        } catch (e) {

        }
    }

    const getNextPage = async () => {
        try{
            const {data} = await CharacterApi.getNextPage(activePage)
            setUsers(data.results)
            setInfo(data.info)
        } catch (e) {

        }
    }
    const universalGetUsers = async () => {
        try{
            const {data} = await CharacterApi.getUsers(activePage)
            setUsers(data.results)
            setInfo(data.info)
        } catch (e) {

        }
    }

    useEffect(()=>{
        setFormValues(editMode ? editUser : initialState)
    },[editMode])

    useEffect(()=>{
        // getUsers()
       // fetch("https://rickandmortyapi.com/api/character")
       //          .then(data => data.json())
       //          .then(res => {
       //              // console.log(res.results)
       //              setUsers(res.results)
       //              setInfo(res.info)
       //              // console.log('moreUsers', moreUsers)
       //          })
    }, []);

    useEffect(()=>{
        // activePage === 1 ? getUsers() : getNextPage()
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
