import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blogs', element: <Blogs></Blogs> },
        ]
    }
]);

export default router;