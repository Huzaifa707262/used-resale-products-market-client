import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCard from './BikeCard';

const Bike = () => {
    const bikes = useLoaderData();

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                bikes.map(bike => <BikeCard
                    key={bike._id}
                    bike={bike}
                ></BikeCard>)
            }
        </div>
    );
};

export default Bike;