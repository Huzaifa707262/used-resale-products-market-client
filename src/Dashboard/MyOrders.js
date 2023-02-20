import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import Loading from '../Loading/Loading';
import DisplayError from '../Shared/DisplayError/DisplayError';
import DeleteModal from './DeleteModal';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [actionDelete, setActionDelete] = useState(null);
    const [advertise, setAdvertise] = useState({})


    const closeModal = () => {
        setActionDelete(null);
    }

    const { data: orders = [], refetch, isLoading, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const AdvertiseData = (id) => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {

                setAdvertise(data)
            })
    }



    const successDelete = (deleteOrder) => {
        fetch(`http://localhost:5000/orders/${deleteOrder._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`${deleteOrder.productName} deleted successfully`)
                    setActionDelete(null)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        return <DisplayError></DisplayError>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Advertised</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) =>

                            <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td><Link to="/dashboardLayout/dashboard/pay"><button className="btn btn-xs  btn-info">Pay</button></Link></td>
                                <td><label onClick={() => setActionDelete(order)} htmlFor="deleteModal" className="btn btn-xs">Delete</label></td>

                            </tr>

                        )
                    },
                    {actionDelete &&
                        <DeleteModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete ${actionDelete.productName}. It cannot be undone.`}
                            modalData={actionDelete}
                            closeModal={closeModal}
                            successDelete={successDelete}
                        ></DeleteModal>
                    },


                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;