import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    // const navigation = useNavigation();

    const { data: bookings = [], } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('https://y-alpha-sage.vercel.app/booking')
            const data = await res.json()
            console.log(data);
            return data
        }
    });
    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h3 className='text-xl text-secondary font-bold'>
                Payment for {bookings.productName}</h3>
            <p className=''>Please pay <strong>{bookings.price} </strong>
                for your appointment on
                at </p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookings={bookings}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;