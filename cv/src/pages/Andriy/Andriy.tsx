import './Andriy.module.scss'
import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../../common/AppRoutes";
const Andriy = () => {
    const login = (userRole: string) => {
        localStorage.setItem('users', JSON.stringify({ id: '1', role: userRole }));
    }
    const logout = () => localStorage.removeItem('users');
    return (
        <div>
            <p>Hello, login please</p>
            <button type='button' onClick={() => login('Andriy')}>Login as Andriy</button>
            <br />
            <button type='button' onClick={() => login('guest')}>Login as Guest</button>
            <br />
            <button type='button' onClick={() => logout()}>Logout</button>
            <div>
                <Link to={AppRoutes.ANDRIYLOGIN}>Andriy</Link>
                <Link to={AppRoutes.GUESTLOGIN}>Guest</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Andriy;