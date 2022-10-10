import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import QuizDetails from "../components/QuizDetails/QuizDetails";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizDetails></QuizDetails>
            },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blogs', element: <Blogs></Blogs> },
        ]
    }
]);

export default router;