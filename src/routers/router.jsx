import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home Page/Home/Home";
import About from "../Component/About Page/About/About";
import Pricing from "../Component/Pricing Page/Pricing/Pricing";
import Errorpage from "../Component/ErrorPgae/Errorpage";
import Feature from "../Component/Feature Page/Feature/Feature";

const router =createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/pricing',
                element: <Pricing/>
            },
            {
                path: '/feature',
                element: <Feature/>
            }
        ]
    }
])

export default router;