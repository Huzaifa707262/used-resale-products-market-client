import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const Alluser = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("https://y-alpha-sage.vercel.app/users");
            const data = await res.json();
            return data;
        }
    });

    const handleAdmin = (id) => {
        fetch(`https://y-alpha-sage.vercel.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin Successfully");
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch();
    return (
        <div className="overflow-x-auto">
            <h2 className='text-xl'>All Users:</h2>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Alluser;