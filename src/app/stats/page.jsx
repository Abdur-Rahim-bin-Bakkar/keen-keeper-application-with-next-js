import Chart from '@/components/Chart/Chart';
import React, { useContext } from 'react';
export const metadata = {
  title: "Communication Stats",
  description: "my communication application using next js ",
};

const StatsPage = () => {
    return (
        <div className='bg-[#F8FAFC]  py-15'>
            <div className="max-w-11/12 mx-auto">
                <h1 className='text-3xl font-bold'>Friendship Analytics</h1>
                <Chart/>
            </div>
        </div>
    );
};

export default StatsPage;