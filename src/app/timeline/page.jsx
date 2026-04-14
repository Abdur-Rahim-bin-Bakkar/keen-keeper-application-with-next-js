'use client'
import React, { useContext, useRef } from 'react';
import { providerContext } from '../lib/Providers';
import CallCard from '@/components/CallRecord/CallCard';



const TimelinePage = () => {
    const { record, setRecord } = useContext(providerContext)
    const handleSelect = (e) => {
        const selectedType = e.target.value;

        const newRecord = [...record].sort((a, b) => {
            if (a.type === selectedType ) return -1;
            if (b.type === selectedType ) return 1;
            console.log(selectedType)
            return 0;
        });

        setRecord(newRecord);

    }
    return (
        <div className="bg-[#F8FAFC] py-15">
            <div className='max-w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold'>Timeline </h1>


                <fieldset className="fieldset my-4">

                    <select onChange={handleSelect} defaultValue="Filter Timeline" className="select ">
                        {/* <option disabled={true}>Filter Timeline</option> */}
                        <option>Call</option>
                        <option>Video</option>
                        <option>Text</option>
                    </select>


                </fieldset>


                <div className="">
                    {
                        record.map((re, i) => <CallCard key={i} re={re} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;