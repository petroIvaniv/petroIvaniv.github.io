import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
import { Outlet } from "react-router-dom";
import yaryna from "./yaryna.module.scss";
import Container from "./MyCalculator/Container";

const Yaryna = () => {
    const logout = () => localStorage.removeItem('user')
    const login = (userRole) => {
        localStorage.setItem('user',  JSON.stringify({id: '1', role: userRole}))
     }
    return (
        <div className={yaryna.containerYara}>
            <h1 className={yaryna.title}>Hi, please login</h1>
            <button type='button' className={yaryna.button} onClick={()=>login('Yaryna')}>LOGIN AS YARYNA</button>
            <button type='button' className={yaryna.button} onClick={()=>login('guest')}>LOGIN AS GUEST</button>
            <button  type='button' className={yaryna.button} onClick={logout}>LOGOUT</button>
            <div className={yaryna.links}>
                <Link to={AppRoutes.MYLOGIN}> I'm Yaryna</Link>
                <Link to={AppRoutes.NOTMYLOGIN}> I'm not Yaryna</Link>
                <Link to={AppRoutes.VIEW}> I want just check a photo</Link>
            </div>
            <br />
            <Outlet />
            <Container />
        </div>
    )
}
  export default Yaryna
