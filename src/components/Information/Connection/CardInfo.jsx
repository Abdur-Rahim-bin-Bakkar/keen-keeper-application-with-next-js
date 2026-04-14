import React from 'react';

const CardInfo = ({next,goal,duration}) => {
    const date = new Date(next)
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    console.log()
    return (
        <div className='grid md:grid-cols-3 gap-3 '>
            
            
            <div className="card bg-white p-4 text-center space-y-2 h-40 justify-center items-center">
                <h1 className='font-semibold text-2xl'>{duration}</h1>
                <p className='text-[#64748B] '>Days Since Contact</p>
            </div>
            <div className="card bg-white p-4 text-center space-y-2 justify-center items-center">
                <h1 className='font-semibold text-2xl'>{goal} </h1>
                <p className='text-[#64748B] '>Goal (Days)</p>
            </div> 
            <div className="card bg-white p-4 text-center space-y-2 justify-center items-center">
                <h1 className='font-semibold text-2xl'>{month} {day} ,{year} </h1>
                <p className='text-[#64748B] '>Next Due</p>
            </div>
            
        </div>
    );
};

export default CardInfo;