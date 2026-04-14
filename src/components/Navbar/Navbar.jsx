import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import LinkCompo from '../Links/LinkCompo';

// import 

const Navbar = () => {

    return (
        <div className='shadow-sm'>
            <div className="navbar bg-white max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <LinkCompo />

                        </ul>
                    </div>
                    <Image src={logo} alt='logo' />

                </div>
                <div className="navbar-center ">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <LinkCompo />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;