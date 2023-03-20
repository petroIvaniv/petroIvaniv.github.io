import React from "react";
import {useEffect, useState} from "react";
import {Pagination} from "rsuite";
// import avatar from './me.jpeg';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import {Outlet} from "react-router-dom";
import {LocationApi} from "./Api/Api";
// import {Locations} from "./Api/Locations";


const Yaryna = ({Component}) => {
    const [users, setUsers] = useState([]);
    const [info, setInfo] = useState({});
    const [activePage, setActivePage] = useState(1);

    const logout = () => localStorage.removeItem('user')
    const login = (userRole) => {
        localStorage.setItem('user',  JSON.stringify({id: '1', role: userRole}))
     }

     const getLoc = async () => {
        try{
            const {data} = await LocationApi.getLoc()
            setUsers(data.results);
            setInfo(data.info)
        } catch (e) {
        }
    }

    // const getNextLoc = async () => {
    //     try{
    //         const {data} = await CharacterApi.getNextLoc(activePage)
    //         setUsers(data.results)
    //         setInfo(data.info)
    //     } catch (e) {

    //     }
    // }
    // const universalGetLocation = async () => {
    //     try{
    //         const {data} = await LocationApi.getLocations(activePage)
    //         setUsers(data.results)
    //         setInfo(data.info)
    //     } catch (e) {

    //     }
    // }
    useEffect(()=>{
        getLoc()
    },[]);
    // useEffect(()=>{
    //     activePage === 1 ? getLoc() : getNextLoc()
    // },[activePage]);
    return (
        <div className="container-Yara">
            <h1 className="title">Hi, please login</h1>
            <button type='button' className="button" onClick={()=>login('Yaryna')}>LOGIN AS YARYNA</button>
            <button type='button' className="button" onClick={()=>login('guest')}>LOGIN AS GUEST</button>
            <button  type='button' className="button" onClick={logout}>LOGOUT</button>
            {/* <img src={avatar} /> */}
            <div className="links">
                <Link to={AppRoutes.MYLOGIN}> I'm Yaryna</Link>
                <Link to={AppRoutes.NOTMYLOGIN}> I'm not Yaryna</Link>
                <Link to={AppRoutes.VIEW}> I want just check a photo</Link>
            </div>
            <Outlet />
            {/* <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info?.count}
                limit={10}
                maxButtons={5}
                activePage={activePage}
                onChangePage={setActivePage}
            /> */}
            <Component 
            users={users}
            />
        </div>
    )
}
  export default Yaryna
