import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState([]);
    const email = user?.email



    useEffect(() => {

        fetch(`https://y-alpha-sage.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
            });

    }, [email]);


    return (
        <section>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80   text-base-content">
                        <li><Link to="/dashboardLayout/dashboard/myOrders">My Orders</Link></li>

                        <>
                            <li><Link to="/dashboardLayout/dashboard/addProduct">Add A Products</Link></li>
                            <li><Link to="/dashboardLayout/dashboard/myProducts">My Products</Link></li>
                        </>

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboardLayout/dashboard/allUsers">All Users</Link></li>
                                <li><Link to="/dashboardLayout/dashboard/allSeller">All Seller</Link></li>
                                <li><Link to="/dashboardLayout/dashboard/allBuyer">All Buyer</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;