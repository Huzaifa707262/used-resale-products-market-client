import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='ml-4 mr-4 mt-5'>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;