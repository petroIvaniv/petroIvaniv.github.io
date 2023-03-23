import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import Header from "../components/Header/Header";
import Yaryna from '../pages/Yaryna/yaryna';
import { AppRoutes } from "./AppRoutes";
import Dimasichock from "../pages/Dimasichock/Dimasichock";
import Student from "../pages/Dimasichock/Student/Student";
import FakeStudent from "../pages/Dimasichock/FakeStudent/FakeStudent";
import {
    AdminRoute,
    PrivateRoute,
    PublicRoute,
    YarynaRoute,
    GuestRoute,
    NotYarynaRoute,
    AndriyRoute,
    AGuestRoute,
    DimasichockRouter,
    FakeStudentRoute,
    StudentRoute
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
import Mentor from "../pages/Mentor/Mentor";
import AndriyLogin from "../pages/Andriy/AndriyLogin/AndriyLogin";
import GuestLogin from "../pages/Andriy/GuestLogin/GuestLogin";
import Orest from "../pages/Orest/Orest"
import OUser from "../pages/Orest/OUser/OUser";
import OAdmin from "../pages/Orest/OAdmin/OAdmin";
import WrongSite from "../pages/Orest/WrongSite/WrongSite";
import {
    OUserRoute,
    OAdminRoute,
    WrongSiteRoute
} from "../components/HOC/ROuteHOCs"
import {Comp} from "../pages/Mentor/components/User/User";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>,
        errorElement: <h1>NOt FOUND</h1>,
        children: [
            {
                path: AppRoutes.Dimasichock,
                element: <Dimasichock/>,
                children: [
                    {
                    path: AppRoutes.ADMIN,
                    element: <DimasichockRouter Component={Admin}/>,
                    },
                    {
                        path: AppRoutes.FAKESTUDENT,
                        element: <FakeStudentRoute Component={FakeStudent}/>,
                    },
                    {
                        path: AppRoutes.STUDENT,
                        element: <StudentRoute Component={Student}/>,
                    }
                ]
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
                element: <Andriy/>,
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
                element: <Yevhen />
            },
            {
                path: AppRoutes.MENTOR,
                element: <Mentor Component={Comp} form={true}/>
            },
            {
                path: AppRoutes.OREST,
                element: <Orest/>,
                children: [
                    {
                        path: AppRoutes.OUSER,
                        element: <OUserRoute Component={OUser}/>
                    },
                    {
                        path: AppRoutes.OADMIN,
                        element: <OAdminRoute Component={OAdmin}/>
                    },
                    {
                        path: AppRoutes.WRONGSITE,
                        element: <WrongSiteRoute Component={WrongSite}/>
                    }
                ]
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
