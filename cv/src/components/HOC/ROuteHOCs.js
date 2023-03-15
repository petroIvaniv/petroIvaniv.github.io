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

export const YarynaRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="Yaryna" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const NotYarynaRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="guest" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const GuestRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ? <Component user={user}/>  : <Component user={user}/>
}
export const DimasichockRouter = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="Dimasichock" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const FakeStudentRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ==="Student" ? <Component user={user}/> :  <Navigate to={AppRoutes.MAIN}/>
}

export const StudentRoute = ({Component}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role ? <Component user={user}/>  : <Component user={user}/>
}
