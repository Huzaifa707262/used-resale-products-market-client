import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const BikeCard = ({ bike }) => {
    const { brand, image, location, originalPrice, resalePrice, useTime, seller, whenItPosted } = bike;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-full h-[15rem]' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>Seller: {seller}</p>
                <p>Original Price: ${originalPrice}</p>
                <mark><p>Resale Price: ${resalePrice}</p></mark>
                <p>Year of Used: {useTime}</p>
                <p>When It's Posted: {whenItPosted}</p>
                <div className='flex gap-2'>
                    <MdLocationOn />
                    <small>{location}</small>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;