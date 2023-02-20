import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch();
    }

    return (
        <div>
            <img src="https://th.bing.com/th/id/OIP.yYBFzWZ0R970KK2bJhwO9AHaEi?w=243&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            <p className='text-red-600'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className='text-2xl'>Please <button onClick={handleLogOut} className='btn btn-primary'>SignOut</button> and log back in</h4>
        </div>
    );
};
export default DisplayError;