import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { brand, image, description, } = category;
    return (
        <div className="card   bg-base-100 shadow-2xl">
            <figure><img className='lg:h-[10rem] h-[15rem] w-full' src={image} alt="category" /></figure>
            <div className="card-body">
                <h2 className="card-title mt-[-4px]">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center lg:mt-[-12px]">
                    <Link to={`/category/${brand}`}>
                        <button className="btn btn-primary">View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;