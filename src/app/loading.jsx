"use client";
import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center '>
            <HashLoader color="#1A8862" size={60} />
            {/* <span className='loading'></span>
            <h1>Loading</h1> */}
            
        </div>
    );
};

export default loading;