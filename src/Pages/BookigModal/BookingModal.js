import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const BookingModal = ({ modals, setModals }) => {
    const { user } = useContext(AuthContext);
    const { productName, resalePrice, brand } = modals;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const orders = {
            userName,
            productName,
            location,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success("Order confirmed");
                    setModals(null);

                } else {
                    toast.error(data.message);
                }

            })


    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{brand}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" disabled name='name' defaultValue={user?.displayName} className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input type="text" disabled name='email' defaultValue={user?.email} className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name:</span>
                            </label>
                            <input type="text" disabled name='productName' defaultValue={productName} className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" disabled name='price' defaultValue={resalePrice} className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input type="text" required name='location' placeholder='Your location' className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone:</span>
                            </label>
                            <input type="text" required name='phone' placeholder='Your Phone Number' className="input h-[30px] input-bordered w-full max-w-xs" />
                        </div>
                        <button className='btn btn-primary w-full h- max-w-xs mt-4'>Submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default BookingModal;