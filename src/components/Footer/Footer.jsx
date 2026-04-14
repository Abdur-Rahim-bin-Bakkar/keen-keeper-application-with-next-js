import React from 'react';
import logo from '@/assets/logo-xl.png'
import facebook from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
import instagram from '@/assets/instagram.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-10 '>
            <div className="max-w-11/12 mx-auto">
                <Image src={logo} alt='logo footer' className='w-70 mx-auto' />

                <p className='text-center text-white mt-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='text-center text-white mt-3 text-xl font-bold'>Social Links</h3>
                <div className="flex justify-center items-center gap-3 mt-3">
                    <div className="bg-white w-12 h-12 rounded-full hover:scale-110 duration-700 cursor-pointer hover:-translate-y-1">
                        <Image src={instagram} alt='logo footer' className='' width={100} height={100} />


                    </div>
                    <div className="bg-white w-12 h-12 rounded-full hover:scale-110 duration-700 cursor-pointer hover:-translate-y-1">

                        <Image src={facebook} alt='logo footer' className='w-30 mx-auto' width={100} height={100} />


                    </div>
                    <div className="bg-white w-12 h-12 rounded-full  hover:scale-110 duration-700 cursor-pointer hover:-translate-y-1">
                        <Image src={twitter} alt='logo footer' className='w-30 mx-auto' width={100} height={100} />


                    </div>
                </div>

                <div className="border-t pt-8 pb-5 mt-8 border-[#ffffff30] md:flex justify-between items-center">
                    <p className='text-white text-center md:text-start'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-3 justify-center md:justify-start text-white'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;