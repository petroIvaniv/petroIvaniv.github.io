import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => {
const login = (userRole) => {
   localStorage.setItem('authUser',  JSON.stringify({id: '123456', role: userRole, name: 'Yaryna' }))
}

const logout = () => localStorage.removeItem('authUser')

    return (<div>
        <Header />
        <h1>MAin page</h1>
        <button type='button' onClick={()=>login('user')}>LOGIN AS USER</button>
        <br/>
        <button type='button' onClick={()=>login('admin')}>LOGIN AS ADMIN</button>
        <br/>
        <button type='button' onClick={logout}>LOGOUT</button>
        <Outlet />
    </div>)
}

export default MainPage
