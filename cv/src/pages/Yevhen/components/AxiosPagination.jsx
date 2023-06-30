import React, { useEffect, useState } from "react";
import { CharacterApi } from "../../../api/api";
import { LocationApi } from "../../../api/api";
import { Pagination } from 'rsuite';
import { useDispatch, useSelector } from "react-redux";
import { universalGetUsersThunk, yevhenAction } from "../../../redux/actions/yevhenAction";


const AxiosPagination = ({Component}) => {
    const dispatch = useDispatch();
    const locations = useSelector((store) => store.yevhen.results);
    const info = useSelector((store) => store.yevhen.info);

    // const [users, setUsers] = useState([]);
    // const [info, setInfo] = useState({});
    // const [locations, setLocation] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const handleClick = (user) => alert(user.name);


    const universalGetUsers = (activePage) => dispatch(universalGetUsersThunk(activePage))
    

    // const getUsers = async () => {
    //     try {
    //         const {data} = await CharacterApi.getCharacters();
    //         setUsers(data.results);
    //         setInfo(data.info);
    //     }
    //     catch (e) {

    //     }
    // }

    // const getNextPage = async () => {
    //     try {
    //         const {data} = await CharacterApi.getNextPage(activePage);
    //         setUsers(data.results);
    //         setInfo(data.info);
    //     }
    //     catch (e) {

    //     }
    // }

    //універсальна ф-я замість getUsers і getNextPage зверху
    // const universalGetUsers = async () => {
    //     try {
    //         // const {data} = await CharacterApi.getUsers(activePage);
    //         const {data} = await LocationApi.getLocation(activePage);

    //         // dispatch(yevhenAction.setLocation(data.results));
    //         // dispatch(yevhenAction.setInfo(data.info));
    //         dispatch(yevhenAction.setData(data));

    //         // setUsers(data.results);
    //         // setLocation(data.results);
    //         // setInfo(data.info);
    //     }
    //     catch (e) {

    //     }
    // }

    useEffect(()=>{
        // getUsers();
        // fetch("https://rickandmortyapi.com/api/location")
        // .then(data => data.json())
        // .then(res => {
        //     setUsers(res.results);
        //     setInfo(res.info);
        //     console.log(res);
        // })
    }, []);


    useEffect(()=>{
        // activePage === 1 ? getUsers() : getNextPage();
        universalGetUsers(activePage);
    }, [activePage])




    return (
        <div>
            <h1>Yevhen</h1>
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info.count}
                limit={20}
                maxButtons={5}
                activePage={activePage}
                onChangePage={setActivePage}
            />
            <Component
            // users={users}
            locations={locations}
            handleClick={handleClick}
            />
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info.count}
                limit={20}
                maxButtons={5}
                activePage={activePage}
                onChangePage={setActivePage}
            />
        </div>
    )
}

export default AxiosPagination;