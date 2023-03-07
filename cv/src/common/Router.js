import{ createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import Header from "../components/Header/Header";
import { AppRoutes } from "./AppRoutes";
import Dimasichock from "../components/Dimasichock/Dimasichock";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>,
        errorElement: <h1>NOt FOUND</h1>,
        children: [
            {
                path: AppRoutes.USERS,
                element: <h1>USERS</h1>,
            },
            {
                path: AppRoutes.PROFILE,
                element: <h1>USER ID</h1>,
            },
            {
                path: AppRoutes.Dimasichock,
                element:<Dimasichock />
            }
        ]
    },
    {
        path: AppRoutes.INFO,
        element: <h1>
            <Header />
            INFO
        </h1> ,
    },
]);
