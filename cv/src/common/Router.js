import{ createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Yaryna from '../pages/yaryna/yaryna';
import { AppRoutes } from "./AppRoutes";
import Dimasichock from "../pages/Dimasichock/Dimasichock";
import { AdminRoute, PrivateRoute, PublicRoute } from "../components/HOC/ROuteHOCs";
import User from "../pages/User/User";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Andriy from "../pages/Andriy/Andriy";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>,
        errorElement: <h1>NOt FOUND</h1>,
        children: [
            {
                path: AppRoutes.Dimasichock,
                element:<Dimasichock />
            },
            {
                path: AppRoutes.YARYNA,
                element: <Yaryna />,
                children: [{

                }]
            },
            {
                path:AppRoutes.Andriy,
                element:<Andriy/>
            }
        ]
    },
    {
        path: AppRoutes.INFO,
        element: <>
            <Header />
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
        element: <AdminRoute  Component={Admin}/> ,
    },
    {
        path: AppRoutes.USER,
        element: <PrivateRoute Component={User}/>,
    },
]);
