import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes.jsx";
import Consult from "../../pages/Consult/components/Consult/Consult";

export const PrivateRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    const logic = " no logic"
    return authUser?.id ? <Component authUser={authUser} logic={logic}/> : <Navigate to={AppRoutes.MAIN}/>

}

export const ConsultPrivateRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.name ? <Component /> : <Navigate to={AppRoutes.CONSULT}/>

}

export const PrivateRouteForHOC = ({HOC, Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.uid
        ? <HOC Component={Component} />
        : <Navigate to={AppRoutes.LOGIN}/>
}

export const PublicRouteForHOC = ({HOC, Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.uid
        ? <Navigate to={`/user/${authUser?.uid}`}/>
        : <HOC Component={Component} />
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

export const YarynaRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="Yaryna" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const NotYarynaRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="guest" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const GuestRoute = ({Component}) => {
    const users = JSON.parse(localStorage.getItem('user'))
    return users?.role ? <Component user={users}/>  : <Component user={users}/>
}
export const AndriyRoute = ({Component})=>{
    const users = JSON.parse(localStorage.getItem('users'));
    return users?.role ==="Andriy" ? <Component user={users}/> :  <Navigate to={AppRoutes.MAIN}/>
}
export const AGuestRoute = ({Component}) =>{
    const users = JSON.parse(localStorage.getItem('users'))
    return users?.role ==="guest" ? <Component user={users}/> :  <Navigate to={AppRoutes.MAIN}/>
}
