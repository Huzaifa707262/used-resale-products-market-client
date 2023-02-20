import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import SignUp from '../../Pages/SignUp/SignUp';
import LogIn from '../../Pages/LogIn/LogIn';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Bike from '../../Pages/Home/Bike/Bike';
import DashboardLayout from '../../layout/DashboardLayout';
import Dashboard from '../../Dashboard/Dashboard';
import MyOrders from '../../Dashboard/MyOrders';
import Advertised from '../../Pages/Home/Advertised/Advertised';
import AddProduct from '../../Dashboard/AddProduct';
import AllSeller from '../../Dashboard/AllSeller';
import AllBuyer from '../../Dashboard/AllBuyer';
import Payment from '../../Payment/Payment';
import Alluser from '../../Dashboard/Alluser';
import DisplayError from '../../Shared/DisplayError/DisplayError';






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/category/:brand',
                element: <Bike></Bike>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.brand}`)
            },

        ]
    },
    {
        path: '/dashboardLayout',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboardLayout/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboardLayout/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboardLayout/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboardLayout/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboardLayout/dashboard/allBuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboardLayout/dashboard/pay',
                element: <Payment></Payment>
            },
            {
                path: '/dashboardLayout/dashboard/allUsers',
                element: <Alluser></Alluser>
            },
        ]
    }
])
export default router;
