import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {
    const navigate = useNavigate();

    const { data: specialties = [], } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/specialty`)
            const data = await res.json();
            return data;
        }
    });


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const productPhoto = form.productPhoto.value;
        const resalePrice = form.resalePrice.value;
        const productName = form.productName.value;
        const originalPrice = form.originalPrice.value;
        const phone = form.phone.value;
        const useTime = form.useTime.value;
        const sellerName = form.sellerName.value;
        const whenItPosted = form.whenItPosted.value;
        const location = form.location.value;

        const orders = {
            brand,
            productName,
            productPhoto,
            location,
            phone,
            originalPrice,
            resalePrice,
            sellerName,
            whenItPosted,
            useTime,
        }

        fetch('http://localhost:5000/addProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Add Product successfully");
                    navigate('/')
                } else {
                    toast.error(data.message);

                }

            })


    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <section className="grid lg:grid-cols-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">CompanyName:</span>
                        </label>
                        <select name='brand' className="select h-[30px] select-bordered  w-full max-w-xs">
                            {
                                specialties.map(specialty => <option key={specialty._id}>{specialty.brand}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">SellerName:</span>
                        </label>
                        <input type="text" placeholder='Your Name' name='sellerName' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name:</span>
                        </label>
                        <input type="text" placeholder='Bike Name and Model' name='productName' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Photo:</span>
                        </label>
                        <input type="text" placeholder='Image URL' name='productPhoto' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">OriginalPrice:</span>
                        </label>
                        <input type="text" placeholder='Original Price' name='originalPrice' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">When it Posted:</span>
                        </label>
                        <input type="text" placeholder='When it is posted' name='whenItPosted' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">ResalePrice:</span>
                        </label>
                        <input type="text" placeholder='Resale Price' name='resalePrice' className="input  input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Years of Used:</span>
                        </label>
                        <input type="text" placeholder='Years of Used' name='useTime' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location:</span>
                        </label>
                        <input type="text" name='location' placeholder='Your location' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone:</span>
                        </label>
                        <input type="text" name='phone' placeholder='Your Phone Number' className="input  input-bordered w-full max-w-xs" />
                    </div>
                </section>
                <div className='text-center mt-6'>
                    <button className='btn btn-primary w-full h- max-w-xs mt-4'>Submit</button>

                </div>
            </form>
        </div>
    );
};

export default AddProduct;