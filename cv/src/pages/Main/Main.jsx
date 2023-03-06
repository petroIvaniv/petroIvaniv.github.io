import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => (<div>
    <Header />
    <Outlet />
</div>)

export default MainPage
