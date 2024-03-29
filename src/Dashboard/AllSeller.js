import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const AllSeller = () => {

    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://y-alpha-sage.vercel.app/seller')
            const data = await res.json()
            return data

        }
    })

    const sellerDelete = (id) => {
        fetch(`https://y-alpha-sage.vercel.app/seller/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`Deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <h2 className='text-xl'>All Sellers:</h2>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Contact</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>{seller.sellerName}</td>
                            <td>{seller.productName}</td>
                            <td>{seller.phone}</td>
                            <td><button onClick={() => sellerDelete(seller._id)} className='btn btn-xs'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSeller;