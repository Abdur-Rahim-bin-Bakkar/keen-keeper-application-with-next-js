'use client'
import { providerContext } from '@/app/lib/Providers';
import React, { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { IoMdVideocam } from 'react-icons/io';
import { LuMessageSquareMore } from 'react-icons/lu';

const Call = ({ expectedFriend }) => {
    const { record, setRecord } = useContext(providerContext)
    console.log(record)
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    // console.log(year,day, month)

    const handelText = () => {
        const type = 'Text'
        const name = expectedFriend.name
        setRecord([...record, {type, name, year, day, month,expectedFriend}])
    }
    const handelVideo = () => {
        const type = 'Video'
        const name = expectedFriend.name
        setRecord([...record, {type, name, year, day, month,expectedFriend}])
    }
    const handelCall = () => {
        const type = 'Call'
        const name = expectedFriend.name
        setRecord([...record, {type, name, year, day, month,expectedFriend}])
    }
    return (
        <div className='card bg-white p-4 min-h-50'>
            <h1 className='text-lg font-semibold'>Quick Check-In</h1>

            <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div onClick={handelCall} className="card bg-[#E9E9E930] text-[#1F2937] py-4 text-center cursor-pointer hover:-translate-y-1">
                    <BiPhoneCall className='text-2xl text-center w-10 mx-auto' />
                    <p className='font-semibold mt-2'>Call</p>
                </div>
                <div onClick={handelText} className="card bg-[#E9E9E930] text-[#1F2937] py-4 text-center cursor-pointer hover:-translate-y-1">
                    <LuMessageSquareMore className='text-2xl text-center w-10 mx-auto' />
                    <p className='font-semibold mt-2'>Text</p>
                </div>
                <div onClick={handelVideo} className="card bg-[#E9E9E930] text-[#1F2937] py-4 text-center cursor-pointer hover:-translate-y-1">
                    <IoMdVideocam className='text-2xl text-center w-10 mx-auto' />
                    <p className='font-semibold mt-2'>Video</p>
                </div>
            </div>

        </div>
    );
};

export default Call;