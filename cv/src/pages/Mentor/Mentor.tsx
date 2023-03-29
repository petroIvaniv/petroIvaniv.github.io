import {FC, ReactElement, useEffect, useState} from "react";
import ReactForm from "./components/Form/ReactForm";
import {CharacterApi} from "../../api/api";
import {Pagination} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { rickMortyActions, universalGetUsersThunk } from "../../redux/actions/rickMortyActions.js";
import UserComp, {Comp, CompProps} from "./components/User/User";

const initialState = {
    name: '',
    password: ''
}
const editUser = {name: 'Ihor', password: '123'}

interface Props {
    Component: FC<CompProps>
    isAdmin: boolean
    form?: any
}

interface FormValues {
    name: string,
    password: string
}



const Mentor = ({Component, isAdmin = false, form}: Props) :ReactElement => {
    const dispatch = useDispatch();

    // @ts-ignore
    const users = useSelector((store)=> store.mentor.results)
    // @ts-ignore
    const info = useSelector((store)=> store.mentor.info)
    const [activePage, setActivePage] = useState<number>(1);
    const [editMode, setEditMode] = useState<boolean>(true);
    const [formValues, setFormValues] = useState<FormValues>(editMode ? editUser : initialState)

    // @ts-ignore
    const universalGetUsers = (page: number) => dispatch(universalGetUsersThunk(page))


    let name = "ne Ihor"
    const handleClick = (user: { name: string }) => alert(user.name)


    // const universalGetUsers = async () => {
    //     try{
    //         const {data} = await CharacterApi.getUsers(activePage)
    //         // setUsers(data.results)
    //         // setInfo(data.info)
    //         // dispatch(rickMortyActions.setCharacters(data.results))
    //         // dispatch(rickMortyActions.setInfo(data.info))
    //         dispatch(rickMortyActions.setData(data))
    //     } catch (e) {
    //
    //     }
    // }

    useEffect(()=>{
        setFormValues(editMode ? editUser : initialState)
    },[editMode])

    useEffect(()=>{
    }, []);

    useEffect(()=>{
        universalGetUsers(activePage)
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
