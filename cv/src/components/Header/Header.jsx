import styles from './Header.module.scss'
import '../../yaryna/yaryna.scss'
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
const Header = () => {
    console.log('header')

    return  (
        <div className={styles.container}>
            <Link to={AppRoutes.INFO}> Info</Link>
            <Link to ={AppRoutes.Dimasichock}>Dimasichock</Link>
            <br/>
            <Link to={AppRoutes.YARYNA}> Check who is Yaryna</Link>
        </div>
    )
}

export default Header;
