'use client'
import { providerContext } from '@/app/lib/Providers';
import React, { useContext } from 'react';


const Chart = () => {
     const data = useContext(providerContext)
    return (
        <div className='card bg-white p-4 border mt-5'>
            <h1 className='text-lg text-[#244D3F] font-semibold'>By Interaction Type</h1>
        </div>
    );
};

export default Chart;