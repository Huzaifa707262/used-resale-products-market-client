import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const AllBuyer = () => {

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyer')
            const data = await res.json()
            console.log(data);
            return data
        }
    })

    const buyerDelete = (id) => {
        fetch(`http://localhost:5000/buyer/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`${result.productName} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, i) => <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer.userName}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.productName}</td>
                            <td><button onClick={() => buyerDelete(buyer._id)} className='btn btn-xs'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;