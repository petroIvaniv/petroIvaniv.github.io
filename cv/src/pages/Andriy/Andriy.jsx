import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
import './Andriy.module.scss'
import styles from './Andriy.module.scss'
import Container from "./calculator/Container";
import MyForm from "./components/Form/MyForm";
const Andriy = () =>{
    const login = (userRole) => {
        localStorage.setItem('users',  JSON.stringify({id: '1', role: userRole}));
    }
    const logout = () => localStorage.removeItem('users');
    return(
        <div>
            {/*<h1 className={styles.title}>Andriy</h1>*/}
            {/*<Container/>*/}
            {/*<p>Hello, login please</p>*/}
            {/*    <button type='button' onClick={()=>login('Andriy')}>Login as Andriy</button>*/}
            {/*    <br/>*/}
            {/*    <button type='button' onClick={()=>login('guest')}>Login as Guest</button>*/}
            {/*    <br/>*/}
            {/*    <button type='button' onClick={()=>logout()}>Logout</button>*/}
            {/*<div>*/}
            {/*    <Link to={AppRoutes.ANDRIYLOGIN}>Andriy</Link>*/}
            {/*    <Link to={AppRoutes.GUESTLOGIN}>Guest</Link>*/}
            {/*</div>*/}
            {/*<Outlet/>*/}
            <MyForm/>
        </div>
    )
}
export default Andriy;