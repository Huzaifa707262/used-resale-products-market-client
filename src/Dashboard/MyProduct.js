import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';


const MyProduct = () => {


    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("https://y-alpha-sage.vercel.app/products");
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (id) => {
        fetch(`https://y-alpha-sage.vercel.app/seller/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
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
                        <th>Product</th>
                        <th>Price</th>
                        <th>Advertised</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myProducts.map((product, i) => <tr key={product._id}>
                            <th>{i + 1}</th>
                            <td>{product.sellerName}</td>
                            <td>{product.productName}</td>
                            <td>${product.resalePrice}</td>
                            <td><button className='btn btn-xs btn-info'>Advertised</button></td>
                            <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;