'use client'
import React, { useContext } from 'react';
import { providerContext } from '../lib/Providers';
import CallCard from '@/components/CallRecord/CallCard';


const TimelinePage = () => {
    const { record } = useContext(providerContext)
    console.log(record)
    return (
        <div className="bg-[#F8FAFC] py-15">
            <div className='max-w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold'>Timeline </h1>

                <div className="">
                        {
                            record.map((re,i) => <CallCard key={i} re={re} />)
                        }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;