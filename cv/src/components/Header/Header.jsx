import styles from './Header.module.scss'
import '../../pages/Yaryna/yaryna.scss'
import './../../pages/Andriy/Andriy.module.scss'
import './../../pages/Dimasichock/Dimasichock.module.scss'
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes.jsx";
const Header = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return  (
        <div className={styles.container}>
            <Link to={AppRoutes.MAIN}> MAin</Link>
            <Link to={AppRoutes.MENTOR}> MENTOR</Link>
            <Link to={AppRoutes.INFO}> Info</Link>
            <Link to ={AppRoutes.Dimasichock}>Dimasichock</Link>
            <br/>
            <Link to={AppRoutes.YARYNA}> Check who is Yaryna</Link>
            <Link to={AppRoutes.Andriy}>Andriy</Link>
            <Link to={AppRoutes.YEVHEN}>Yevhen</Link>
            <Link to={AppRoutes.OREST}>Orest</Link>
            <br/>
            <Link to={AppRoutes.ADMIN}> ADMIN</Link>
            <Link to={AppRoutes.LOGIN}> LOGIN</Link>
            <Link to={`/user/${authUser?.uid}`}> USER</Link>
        </div>
    )
}

export default Header;
