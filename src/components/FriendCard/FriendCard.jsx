import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ fri }) => {
    const getDaysAgo = (date) => {
        const today = new Date();
        const lastDate = new Date(date);

        const diffTime = today - lastDate; // milliseconds difference
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    };

    console.log(fri)
    return (
        <Link href={`/friend/${fri.id}`} className='card p-4 bg-white text-center space-y-3 cursor-pointer hover:-translate-y-1 duration-700'>

            <Image src={fri.picture} alt='friend picture' width={100} height={100} className='w-25 mx-auto rounded-full '/>
            <h1 className='text-xl font-bold'>{fri.name}</h1>

            <p className='text-[#64748B] '>{getDaysAgo(fri.last_contact_date)}d ago</p>

            <div className="flex justify-center gap-3 items-center">

                {
                    fri.tags.map((tag, i) => <button key={i} className='btn rounded-full btn-sm bg-[#CBFADB] w-25 text-[#244D3F] font-bold '>{tag}</button>)
                }
            </div>

            <span className={` btn btn-sm capitalize rounded-full my-2  mx-auto text-white font-bold ${fri.status === 'overdue' && 'bg-[#EF4444]  '} ${fri.status === 'almost due' && 'bg-[#EFAD44]'} ${fri.status === 'on-track' && 'bg-[#244D3F]'}  `}>{fri.status}</span>
        </Link>
    );
};

export default FriendCard;