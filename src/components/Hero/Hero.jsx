import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="bg-[#F8FAFC] max-w-11/12 mx-auto pt-15 pb-5">
            <h1 className='text-2xl font-bold text-center '>Friends to keep close in your life</h1>

            <p className='text-[#64748B] text-center mt-3 max-w-[60%] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>

            <div className="flex justify-center my-5 ">
                <button className='btn bg-[#244D3F] text-white hover:-translate-y-1 duration-700'><FaPlus /> Add a Friend</button>
            </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 border-b pb-8 border-[#E9E9E9]">
                <div className="bg-white p-4 text-center card">
                    <h1 className='text-2xl font-bold '>10</h1>
                    <p className='text-[#64748B] mt-1'>Total Friends</p>
                </div>
                <div className="bg-white p-4 text-center card">
                    <h1 className='text-2xl font-bold '>3</h1>
                    <p className='text-[#64748B] mt-1'>On Track</p>
                </div>
                <div className="bg-white p-4 text-center card">
                    <h1 className='text-2xl font-bold '>6</h1>
                    <p className='text-[#64748B] mt-1'>Need Attention</p>
                </div>
                <div className="bg-white p-4 text-center card">
                    <h1 className='text-2xl font-bold '>12</h1>
                    <p className='text-[#64748B] mt-1'>Interactions This Month</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;