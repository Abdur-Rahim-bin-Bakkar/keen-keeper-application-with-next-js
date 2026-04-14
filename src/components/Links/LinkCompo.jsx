'use client'
import React from 'react';
import { GoHome } from 'react-icons/go';
import { MdAccessTime } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LinkCompo = () => {
    const path = usePathname()

    return (
        <>
            <Link href={'/'} className={`flex gap-1 items-center text-[#64748B] ${path === '/' && 'bg-[#244D3F] btn text-white font-bold'}`}><GoHome className='text-lg' /> Home</Link>
            <Link href={'/timeline '} className={`flex gap-1 items-center text-[#64748B] ${path === '/timeline' && 'bg-[#244D3F] btn text-white font-bold'} `}><MdAccessTime className='text-lg' /> Timeline</Link>
            <Link href={'/stats'} className={`flex gap-1 items-center text-[#64748B]   ${path === '/stats' && 'bg-[#244D3F] btn text-white font-bold'}`}><ImStatsDots className='text-lg' /> Stats</Link>
        </>
    );
};

export default LinkCompo;