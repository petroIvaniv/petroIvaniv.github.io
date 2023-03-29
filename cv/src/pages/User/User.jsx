import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes.jsx";

const User = ({logic, authUser}) => {
    const {pathname} = useLocation()
    const {userId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        authUser?.id !== userId && navigate(AppRoutes.MAIN)
    },[])
    return <div>
        <h1>USER ID</h1>
    </div>
}

export default User;
