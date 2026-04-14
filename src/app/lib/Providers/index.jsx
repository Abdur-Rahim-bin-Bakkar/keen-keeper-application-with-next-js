'use client'
import useHooks from '@/Hooks/useHooks';
import React, { createContext, useState } from 'react';
export const providerContext = createContext()

const IndexProvider = ({children}) => {
    const [friend, setFriend] = useHooks()
    const [record, setRecord] = useState([])
    // console.log(friend)
    return (
        <providerContext.Provider value={{friend, setFriend,record, setRecord}}>
            {children}
        </providerContext.Provider>
    );
};

export default IndexProvider;