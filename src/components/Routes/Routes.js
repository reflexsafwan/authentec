import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Login from "../Login";
import Profile from "../Profile";
import Register from "../Register";
import Wallet from '../Wallet'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/wallet',
                element: <Wallet></Wallet>
            },
        ]
    }
])
export default router
