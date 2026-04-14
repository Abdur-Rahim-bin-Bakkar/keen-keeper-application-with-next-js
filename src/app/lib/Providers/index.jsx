'use client'
import useHooks from '@/Hooks/useHooks';
import React, { createContext } from 'react';
export const providerContext = createContext()

const IndexProvider = ({children}) => {
    const [friend, setFriend] = useHooks()
    // console.log(friend)
    return (
        <providerContext.Provider value={{friend, setFriend}}>
            {children}
        </providerContext.Provider>
    );
};

export default IndexProvider;