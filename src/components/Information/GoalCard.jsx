import React from 'react';

const GoalCard = ({goal}) => {
    return (
        <div className='card p-7 bg-white h-40'>
            <div className="flex justify-between">
                <h1 className='text-2xl font-semibold'>Relationship Goal</h1>
                <button className='btn text-black'>Edit </button>
            </div>
            <h1 className='text-[#64748B]  text-lg mt-4'>Connect every <span className='font-bold text-black'>{goal}</span> days </h1>
            
        </div>
    );
};

export default GoalCard;