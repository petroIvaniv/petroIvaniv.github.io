import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";

export const PrivateRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    const logic = " no logic"
    return authUser?.id ? <Component authUser={authUser} logic={logic}/> : <Navigate to={AppRoutes.MAIN}/>

}

export const PublicRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    console.log(authUser)
    return authUser?.id ? <Navigate to={`/user/${authUser?.id}`}/> : <Component authUser={authUser}/>
}

export const AdminRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    console.log(authUser)
    return authUser?.role ==="admin"
        ? <Component authUser={authUser}/>
        : authUser?.id
            ? <Navigate to={`/user/${authUser?.id}`}/>
            :  <Navigate to={AppRoutes.MAIN}/>
}
