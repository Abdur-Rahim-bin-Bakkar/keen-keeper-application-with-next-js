import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { IoMdVideocam } from 'react-icons/io';
import { LuMessageSquareMore } from 'react-icons/lu';
import textImg from '@/assets/text.png'
import callImg from '@/assets/call.png'
import videImg from '@/assets/video.png'
import Image from 'next/image';

const CallCard = ({ re }) => {
    // console.log(re)
    return (
        <div className='card mt-4 p-4 bg-white flex gap-4 justify-start border border-[#E9E9E9] flex-row items-center '>
            {re.type === 'Call' && <Image src={callImg} alt='video image' width={30} height={30}/>}
            {re.type === 'Text' && <Image src={textImg} alt='video image' width={30} height={30}/>}
            {re.type === 'Video' && <Image src={videImg} alt='video image' width={30} height={30}/>}

            <div className="">
                <h1 className='text-lg font-semibold text-black'>Text <span className='text-[#64748B]'>with {re.expectedFriend.name}</span> </h1>
                <p className='text-[#64748B]'>{re.month} {re.day}, {re.year}</p>
            </div>
        </div>
    );
};

export default CallCard;