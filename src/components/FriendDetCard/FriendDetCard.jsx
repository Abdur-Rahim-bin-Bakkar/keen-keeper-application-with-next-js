import Image from 'next/image';
import React from 'react';

const FriendDetCard = ({ fri }) => {
    return (
        <div>
            <div className='card p-4 bg-white text-center space-y-3 w-full py-5'>

                <Image src={fri.picture} alt='friend picture' width={100} height={100} className='w-25 mx-auto rounded-full ' />
                <h1 className='text-xl font-bold'>{fri.name}</h1>
                <span className={` btn btn-sm capitalize rounded-full my-2  mx-auto text-white font-bold ${fri.status === 'overdue' && 'bg-[#EF4444]  '} ${fri.status === 'almost due' && 'bg-[#EFAD44]'} ${fri.status === 'on-track' && 'bg-[#244D3F]'}  `}>{fri.status}</span>


                <div className="flex justify-center gap-3 items-center">

                    {
                        fri.tags.map((tag, i) => <button key={i} className='btn rounded-full btn-sm bg-[#CBFADB] w-25 text-[#244D3F] font-bold '>{tag}</button>)
                    }
                </div>

                <p className='text-[#64748B] w-[80%] mx-auto text-center'>{`"${fri.bio}"`}</p>

                <p className='text-[#64748B] text-center'>Preferred: email</p>


            </div>
        </div>
    );
};

export default FriendDetCard;