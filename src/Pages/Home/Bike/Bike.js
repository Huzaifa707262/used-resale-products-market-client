import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookigModal/BookingModal';
import BikeCard from './BikeCard';

const Bike = () => {
    const [modals, setModals] = useState({});
    const bikes = useLoaderData();

    return (
        <section>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    bikes.map(bike => <BikeCard
                        key={bike._id}
                        bike={bike}
                        setModals={setModals}
                    ></BikeCard>)
                },

            </div>

            {modals && <BookingModal
                modals={modals}
                setModals={setModals}
            ></BookingModal>
            }
        </section>
    );
};

export default Bike;