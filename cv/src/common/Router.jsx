import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Yaryna from '../pages/Yaryna/yaryna';
import { AppRoutes } from "./AppRoutes.jsx";
import Dimasichock from "../pages/Dimasichock/Dimasichock";
import {
    AdminRoute,
    PrivateRoute,
    PublicRoute,
    YarynaRoute,
    GuestRoute,
    NotYarynaRoute,
    AndriyRoute,
    AGuestRoute, ConsultPrivateRoute, PublicRouteForHOC, PrivateRouteForHOC
} from "../components/HOC/ROuteHOCs";
import User from "../pages/User/User";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Andriy from "../pages/Andriy/Andriy";
import Yevhen from "../pages/Yevhen/Yevhen";
import MyLogin from "../pages/Yaryna/MyLogin/MyLogin";
import NotMyLogin from "../pages/Yaryna/NotMyLogin/NotMyLogin";
// import Cancel from "../pages/Yaryna/GuestView/GuestView";
import GuestView from "../pages/Yaryna/GuestView/GuestView";
import AndriyLogin from "../pages/Andriy/AndriyLogin/AndriyLogin";
import GuestLogin from "../pages/Andriy/GuestLogin/GuestLogin";
import Orest from "../pages/Orest/Orest.jsx";
import { OrestAxios } from "../pages/Orest/OrestAxios";
import {AndriyUser} from "../pages/Andriy/components/User/AndriyUser";
import ConsultHOC from '../pages/Consult/ConsultHOC.jsx';
import Consult from '../pages/Consult/components/Consult/Consult.jsx';
import { Users } from '../pages/Consult/components/Users.tsx';
import { Comp } from '../pages/Mentor/components/User/User.tsx';
import Mentor from '../pages/Mentor/Mentor.tsx'
import SignUpInHOC from "../pages/Login/SIgnUpInHOC";
import SignUP from "../pages/Login/SIgnUP/SignUP";
import SignIn from "../pages/Login/SIgnIn/SignIn";
import UserHOC from "../pages/Mentor/components/User/UserHOC";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>,
        errorElement: <h1>NOt FOUND</h1>,
        children: [
            {
                path: AppRoutes.Dimasichock,
                element: <Dimasichock/>
            },
            {
                path: AppRoutes.YARYNA,
                element: <Yaryna/>,
                children: [
                    {
                    path: AppRoutes.MYLOGIN,
                    element: <YarynaRoute Component={MyLogin}/>,
                    },
                    {
                        path: AppRoutes.NOTMYLOGIN,
                        element: <NotYarynaRoute Component={NotMyLogin}/>,
                    },
                    {
                        path: AppRoutes.VIEW,
                        element: <GuestRoute Component={GuestView}/>,
                    }
                ]
            },
            {
                path: AppRoutes.Andriy,
                element: <Andriy Component={AndriyUser}/>,
                children:[
                    {
                        path: AppRoutes.ANDRIYLOGIN,
                        element: <AndriyRoute Component={AndriyLogin}/>,
                    },
                    {
                        path: AppRoutes.GUESTLOGIN,
                        element: <AGuestRoute Component={GuestLogin}/>
                    }
                ]

            },
            {
                path: AppRoutes.YEVHEN,
                element: <Yevhen form={true}/>
            },
            {
                path: AppRoutes.MENTOR,
                element: <Mentor Component={Comp} form={true}/>
            },
            {
                path: AppRoutes.CONSULT,
                element: <ConsultHOC Component={Consult} />
            },
            {
                path: AppRoutes.OREST,
                element: <Orest Component={OrestAxios}/>
            },
            {
                path: AppRoutes.INFO,
                element: <>
                    <h1>
                        INFO
                    </h1> </>,
            },
        ]
    },

    {
        path: AppRoutes.SIGNUP,
        element: <PublicRouteForHOC HOC ={SignUpInHOC} Component={SignUP} />,
    },
    {
        path: AppRoutes.LOGIN,
        element: <PublicRouteForHOC HOC ={SignUpInHOC} Component={SignIn} />,
    },
    {
        path: AppRoutes.ADMIN,
        element: <AdminRoute Component={Admin}/>,
    },
    {
        path: AppRoutes.USER,
        element: <PrivateRouteForHOC HOC ={UserHOC} Component={User}/>,
    },
    {
        path: AppRoutes.USERS,
        element: <ConsultPrivateRoute Component={Users}/>,
    },



]);
