import React from 'react';
import { MdLocationOn } from 'react-icons/md';


const BikeCard = ({ bike, setModals }) => {
    const { brand, phone, productPhoto, productName, location, originalPrice, resalePrice, useTime, sellerName, whenItPosted } = bike;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-full h-[15rem]' src={productPhoto} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>Bike Name: {productName}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Resale Price: ${resalePrice}</p>
                <p>Year of Used: {useTime}</p>
                <p>When It's Posted: {whenItPosted}</p>
                <p>Contact: {phone}</p>
                <div className='flex gap-2'>
                    <MdLocationOn />
                    <small>{location}</small>
                </div>
                <div className="card-actions justify-center">
                    <label onClick={() => setModals(bike)} htmlFor="bookingModal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;