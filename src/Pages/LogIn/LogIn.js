import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const LogIn = () => {
    const { login, googleSignIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('')

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = data => {
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                const email = user.email;
                getToken(email)
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const email = user.email;
                getToken(email)
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const getToken = (email) => {
        fetch(`https://y-alpha-sage.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                }
            })
    }
    return (
        <div className='h-[400px] flex justify-center items-center mb-12 mt-12'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">

                        <label className="label"><span className="label-text">Email</span> </label>
                        <input {...register("email", { required: 'Email Address is required' })} type="text"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>

                        <input {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"></span> </label>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p className='text-center'><small>New to Resale Market? <Link className='text-secondary ' to="/signup">Create an account</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;