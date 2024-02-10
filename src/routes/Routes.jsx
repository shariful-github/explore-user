import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/users/:id',
                element: <UserDetails></UserDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/users/${params.id}`)
            }
        ]
    },
]);

export default router;