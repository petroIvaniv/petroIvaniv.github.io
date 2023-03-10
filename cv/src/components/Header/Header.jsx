import styles from './Header.module.scss'
import '../../pages/Yaryna/yaryna.scss'
import './../../pages/Andriy/Andriy.module.scss'
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
const Header = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return  (
        <div className={styles.container}>
            <Link to={AppRoutes.MAIN}> MAin</Link>
            <Link to={AppRoutes.INFO}> Info</Link>
            <Link to ={AppRoutes.Dimasichock}>Dimasichock</Link>
            <br/>
            <Link to={AppRoutes.YARYNA}> Check who is Yaryna</Link>
            <Link to={AppRoutes.Andriy}>Andriy</Link>
            <br/>
            <Link to={AppRoutes.ADMIN}> ADMIN</Link>
            <Link to={AppRoutes.LOGIN}> LOGIN</Link>
            <Link to={`/user/${authUser?.id}`}> USER</Link>
        </div>
    )
}

export default Header;
