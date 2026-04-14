import React from 'react';
import { BsArchive } from 'react-icons/bs';
import { MdNotificationsPaused } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const CardFooter = () => {
    return (
        <div className='space-y-3 mt-3 text-[#1F2937] '>
            <div className="card bg-white p-4 flex-row items-center gap-3 justify-center cursor-pointer hover:-translate-y-1">
                <MdNotificationsPaused className='text-2xl'/>
                <h1 className='text-lg font-semibold'>Snooze 2 weeks</h1>
            </div>
            <div className="card bg-white p-4 flex-row items-center gap-3 justify-center cursor-pointer hover:-translate-y-1">
                <BsArchive className='text-2xl'/>
                <h1 className='text-lg font-semibold'>Archive</h1>
            </div>
            <div className="card bg-white p-4 flex-row items-center gap-3 justify-center text-error cursor-pointer hover:-translate-y-1">
                <RiDeleteBinLine className='text-2xl'/>
                <h1 className='text-lg font-semibold'>Delete</h1>
            </div>
            
        </div>
    );
};

export default CardFooter;