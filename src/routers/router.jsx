import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home Page/Home/Home";
import About from "../Component/About Page/About/About";
import Pricing from "../Component/Pricing Page/Pricing/Pricing";
import Errorpage from "../Component/ErrorPgae/Errorpage";
import Feature from "../Component/Feature Page/Feature/Feature";
import Faqpage from "../Component/Faq Page/Faqpage";
import Bloghome from "../Component/Blog Page/Bloghome/Bloghome";
import BlogDetails from "../Component/Blog Page/Blog Details/BlogDetails";

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
            },
            {
                path: '/faq',
                element: <Faqpage/>
            },
            {
                path: '/blog',
                element: <Bloghome/>
            },
            {
                path: '/details',
                element: <BlogDetails/>
            }

        ]
    }
])

export default router;