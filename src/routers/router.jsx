import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home Page/Home/Home";
import About from "../Component/About Page/About/About";

const router =createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element:<About/>
            }
        ]
    }
])

export default router;