import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[500px] flex justify-center items-center mb-12 mt-12'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input
                            {...register("name", {
                                required: 'Name is required',
                            })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input
                            {...register("email", {
                                required: 'Email is required',
                            })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input
                            {...register("password", {
                                required: 'Password is required',
                                // pattern: { value: /[A-Za-z]+$/, message: 'Password must br strong' },
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <input className='mt-8 btn btn-accent w-full' value="SignUp" type="submit" />
                </form>
                <p className='text-center'><small>Already have an account? <Link className='text-secondary ' to="/login">Please Login</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;