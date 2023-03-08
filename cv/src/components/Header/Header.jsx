import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";
const Header = () => {
    console.log('header')

    return  (
        <div className={styles.container}>
            <Link to={AppRoutes.INFO}> Info</Link>
            <Link to ={AppRoutes.Dimasichock}>Dimasichock</Link>
        </div>
    )
}

export default Header;
