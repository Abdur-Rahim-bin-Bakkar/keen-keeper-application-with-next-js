'use client'
import React from 'react';
import img from '@/assets/errorr.png'
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className='bg-[#F8FAFC] py-10'>
            <h1 className='text-2xl font-bold text-center my-2'>Not Found</h1>
            <Image src={img} alt='Not Fount Image' width={100} height={100} className='w-[70%] mx-auto' />


        </div>
    );
};

export default NotFound;