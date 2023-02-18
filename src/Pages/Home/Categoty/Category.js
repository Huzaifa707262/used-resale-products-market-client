import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='grid lg:grid-cols-3 gap-3 mt-8 md:grid-cols-2 grid-cols-1'>
            {
                categories.map(category => <CategoryCard
                    key={category.id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Category;