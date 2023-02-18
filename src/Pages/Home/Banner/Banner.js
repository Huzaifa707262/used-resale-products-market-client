import React from 'react';
import img1 from '../../../assets/Motorcycle-Dealer-Selling.webp'

const Banner = () => {
    return (
        <div className="hero lg:h-[30rem]" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Used Products Resale Market</h1>
                    <p className="mb-5">
                        The motorcycle industry is changing fast. The average age of today’s biker is 47, up from 40 in 2009 and 32 in 1990.
                        There’s no denying that riders are getting older and buying fewer bikes.
                        And that’s leaving a reeling post-recession motorcycle industry looking to the future.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Banner;