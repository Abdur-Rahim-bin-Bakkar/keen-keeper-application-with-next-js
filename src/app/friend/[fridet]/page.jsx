'use client'
import { providerContext } from '@/app/lib/Providers';
import CardFooter from '@/components/CardFooter/CardFooter';
import FriendDetCard from '@/components/FriendDetCard/FriendDetCard';
import Call from '@/components/Information/Call';
import CardInfo from '@/components/Information/Connection/CardInfo';
import GoalCard from '@/components/Information/GoalCard';
import { useParams } from 'next/navigation';
import React, { use, useContext } from 'react';
// const 
const fetchData = fetch('http://localhost:3000/data.json')
    .then(res => res.json())


const page = () => {
    const id = useParams()
    // console.log()
    console.log( typeof id.fridet)
    
    const friend = use(fetchData)
    // const {friend, setFriend} = useContext(providerContext)
    const expectedFriend = friend.find(fri => fri.id === Number(id.fridet))
    // console.log(expectedFriend)
    return (
        <div className='bg-[#F8FAFC] '>


            <div className="grid md:grid-cols-12 gap-3    max-w-11/12  mx-auto py-15 ">
                <div className="col-span-full md:col-span-4  ">
                    <FriendDetCard fri={expectedFriend} />
                    <CardFooter />
                </div>
                <div className="md:col-span-8  space-y-5 ">

                    <CardInfo duration={expectedFriend?.days_since_contact} goal={expectedFriend?.goal} next={expectedFriend?.next_due_date} />

                    <GoalCard goal={expectedFriend?.goal} />
                    <Call expectedFriend={expectedFriend}/>

                </div>
            </div>
        </div>
    );
};

export default page;