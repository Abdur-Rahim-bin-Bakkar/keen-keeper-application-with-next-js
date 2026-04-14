'use client'
import { providerContext } from '@/app/lib/Providers';
import FriendDetCard from '@/components/FriendDetCard/FriendDetCard';
import { useParams } from 'next/navigation';
import React, { use, useContext } from 'react';
// const 
const fetchData = fetch('http://localhost:3000/data.json')
    .then(res => res.json())


const page = () => {
    const id = useParams()
    console.log(id.fridet)
    const friend = use(fetchData)
    // const {friend, setFriend} = useContext(providerContext)
    const expectedFriend = friend.find(fri => fri.id === Number(id.fridet))
    console.log(expectedFriend)
    return (
        <div className='bg-[#F8FAFC] '>
           

            <div className="grid md:grid-cols-12   max-w-11/12 mx-auto py-15 ">
                <div className="col-span-4 w-full">

                    <FriendDetCard fri={expectedFriend} />

                    
                </div>
            </div>
        </div>
    );
};

export default page;