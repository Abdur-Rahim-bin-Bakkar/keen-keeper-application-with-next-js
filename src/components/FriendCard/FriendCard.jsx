import React from 'react';

const FriendCard = ({fri}) => {
    console.log(fri)
    return (
        <div className='card p-4 bg-white text-center'>
            <h1 className='text-xl font-bold'>{fri.name }</h1>
            <span className={` btn btn-sm capitalize rounded-full my-2  mx-auto text-white font-bold ${fri.status ==='overdue' && 'bg-[#EF4444]  '} ${fri.status ==='almost due' && 'bg-[#EFAD44]'} ${fri.status ==='on-track' && 'bg-[#244D3F]'}  `}>{fri.status}</span>
        </div>
    );
};

export default FriendCard;