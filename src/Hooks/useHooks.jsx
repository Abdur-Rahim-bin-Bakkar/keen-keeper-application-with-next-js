'use client'
import React, { useEffect, useState } from 'react';

const useHooks = () => {
    const [friend, setFriend] = useState()
    useEffect(()=>{
        const data = fetch('http://localhost:3000/data.json')
        .then(res => res.json())
        .then(res2 => setFriend(res2))
    },[])
    return [friend, setFriend]
};

export default useHooks;