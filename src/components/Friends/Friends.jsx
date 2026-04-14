// 'use client'
import { providerContext } from '@/app/lib/Providers';
import React, { useContext } from 'react';
import FriendCard from '../FriendCard/FriendCard';

const Friends = async () => {
    // const {friend, setFriend} = useContext(providerContext)
    // console.log(friend)
    const friends = await fetch('http://localhost:3000/data.json')
    const friendsData = await friends.json()
    console.log(friendsData)
    return (
        <div className='max-w-11/12 mx-auto mt-3'>
            <h1 className='text-2xl font-bold '>Your Friend</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    friendsData.map(fri => <FriendCard key={fri.data} fri={fri} />)
                }
            </div>
        </div>
    );
};

export default Friends;