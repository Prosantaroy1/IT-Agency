import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared Page/Navber/Navber";
import Footer from "../Component/Shared Page/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;