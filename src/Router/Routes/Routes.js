import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import SignUp from '../../Pages/SignUp/SignUp';
import LogIn from '../../Pages/LogIn/LogIn';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Bike from '../../Pages/Home/Bike/Bike';






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
])
export default router;
