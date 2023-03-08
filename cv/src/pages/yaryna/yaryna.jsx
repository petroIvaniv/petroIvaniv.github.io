import React from "react";
// import avatar from './me.jpeg';
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";

const Yaryna = () => {
    const logout = () => localStorage.removeItem('user')
    const login = (userRole) => {
        localStorage.setItem('user',  JSON.stringify({id: '1', role: userRole}))
     }
    return (
        <div className="container-Yara">
            <h1 className="title">Hi, please login</h1>
            <button type='button' className="button" onClick={()=>login('yaryna')}>LOGIN AS YARYNA</button>
            <button type='button' className="button" onClick={()=>login('guest')}>LOGIN AS GUEST</button>
            <button  type='button' className="button" onClick={logout}>LOGOUT</button>
            {/* <img src={avatar} /> */}
            <div className="links">
                <Link to={AppRoutes.MYLOGIN}> I'm Yaryna</Link>
                <Link to={AppRoutes.NOTMYLOGIN}> I'm not Yaryna</Link>
                <Link to={AppRoutes.VIEW}> I want just check a photo</Link>
            </div>
            </div>
    )
}
  export default Yaryna
