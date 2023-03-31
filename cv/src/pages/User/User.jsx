import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes.jsx";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";

const User = ({handleSignOut}) => {

    // const {pathname} = useLocation()
    // const {userId} = useParams()
    // const navigate = useNavigate()

    useEffect(()=>{
        // authUser?.id !== userId && navigate(AppRoutes.MAIN)
    },[])
    return <div>
        <h1>USER ID</h1>
        <button onClick={handleSignOut}>SignOut</button>
    </div>
}

export default User;
