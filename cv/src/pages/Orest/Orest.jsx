import styles from './Orest.module.scss'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
import ContainerComp from './LiftingStateUp/ContainerComp';
const Orest = () => {
    const login = (OrestUser) => {
        localStorage.setItem('user', JSON.stringify({id: '228', role: OrestUser}))
    }
    const logout = () => localStorage.removeItem('user')
    return(
        <div>
            <ContainerComp/>
            <h1 className={styles.title}>Hello, login please</h1>
            <button type='button' onClick={()=>login('Orest')}>Login as Orest</button>
            <button type='button' onClick={()=>login('Admin')}>Login as Admin</button>
            <button type='button' onClick={logout}>Logout</button>
            <br />
            <Link className='links' to={AppRoutes.OUSER}>OREST!!!</Link>
            <Link className='links' to={AppRoutes.OADMIN}>Admin</Link>
            <Link className='links' to={AppRoutes.WRONGSITE}>I'm on the wrong site!</Link>
            <Outlet/>
        </div>
    )
}
export default Orest