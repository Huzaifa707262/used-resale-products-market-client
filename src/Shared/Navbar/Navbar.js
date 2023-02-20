import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItem =
        <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/dashboardLayout/dashboard">Dashboard</Link></li>
            {user?.email ?
                <>
                    <button onClick={handleLogOut} className='btn btn-ghost'>SignOut</button>
                    <span className='text-primary'><small>{user?.displayName}</small></span>
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </>
            }
        </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Resale Market</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;