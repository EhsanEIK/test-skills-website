import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/statistics', element: <Statistics></Statistics> },
        ]
    }
]);

export default router;