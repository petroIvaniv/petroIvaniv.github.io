
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
import { Outlet } from "react-router-dom";

const Dimasichock = () =>{
    const logout = () => localStorage.removeItem('user')
    const login = (userRole) => {
        localStorage.setItem('user',  JSON.stringify({id: '2', role: userRole}))
     }
    return (
        <div className='register'>
            <button type='button' onClick={()=>login('Dimasichock')}>Admin</button>
            <button type='button' onClick={()=>login('Student')}>Student</button>
            <button type='button' onClick={logout}>FakeStudent</button>
            <div>
                <Link to={AppRoutes.ADMIN}> Admin</Link>
                <Link to={AppRoutes.STUDENT}>Student</Link>
                <Link to={AppRoutes.FAKESTUDENT}> FakeStudent</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Dimasichock;