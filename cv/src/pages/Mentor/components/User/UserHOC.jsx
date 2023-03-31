import { onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../../../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../../common/AppRoutes";


const UserHOC = ({Component}) => {
    onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('authUser')
            navigate(AppRoutes.LOGIN)
        } catch (e) {
            console.log(e);
        }
    }

    return <Component
        handleSignOut={handleSignOut}
    />
}

export default UserHOC;
