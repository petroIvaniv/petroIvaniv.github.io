import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Yaryna from '../pages/Yaryna/yaryna';
import { AppRoutes } from "./AppRoutes";
import Dimasichock from "../pages/Dimasichock/Dimasichock";
import {
    AdminRoute,
    PrivateRoute,
    PublicRoute,
    YarynaRoute,
    GuestRoute,
    NotYarynaRoute
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
                element: <Andriy/>
            },
            {
                path: AppRoutes.YEVHEN,
                element: <Yevhen />
            }
        ]
    },
    {
        path: AppRoutes.INFO,
        element: <>
            <Header/>
            <h1>
                INFO
            </h1> </>,
    },
    {
        path: AppRoutes.LOGIN,
        element: <PublicRoute Component={Login}/>,
    },
    {
        path: AppRoutes.ADMIN,
        element: <AdminRoute Component={Admin}/>,
    },
    {
        path: AppRoutes.USER,
        element: <PrivateRoute Component={User}/>,
    },

]);
