'use client'
import { providerContext } from '@/app/lib/Providers';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import React, { useContext } from 'react';


const Chart = () => {
    const { record, setRecord } = useContext(providerContext)
    console.log(record)

    const text = []
    const video = []
    const call = []

    record.map(re => {
        if (re.type === 'Text') {
            text.push(re)
            return
        }
        if (re.type === 'Video') {
            video.push(re)
            return
        }
        if (re.type === 'Call') {
            call.push(re)
            return
        }
        console.log(re)
        return 'd'

    })
    console.log(text)
    console.log(video)
    console.log(call)

    const data = [
        { name: 'Text', value: text.length, fill: "#7f37f5" },
        { name: 'Video', value: video.length, fill: "#244d3f" },
        { name: 'Call', value: call.length, fill: "#37a163" }
    ]
    return (
        <div className='card bg-white p-4  mt-5'>
            <h1 className='text-lg text-[#244D3F] font-semibold'>By Interaction Type</h1>

            <PieChart className='mx-auto my-15' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    // isAnimationActive={isAnimationActive}
                />
                <Tooltip/>
                <Legend/>
                {/* <RechartsDevtools /> */}
            </PieChart>

        </div>
    );
};

export default Chart;