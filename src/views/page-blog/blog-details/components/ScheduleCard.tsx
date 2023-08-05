import IconV1 from '@/components/logoicon/iconV1'
import React from 'react'
import { BsClock } from 'react-icons/bs'

type Props = {}

const ScheduleCard = (props: Props) => {
    return (
        <div className="p-5 lg:p-14 bg-sc rounded-lg relative">
            <div className='absolute top-2 left-2'>
                <IconV1 iw='170' ih='170' />
            </div>
            <div className='absolute bottom-2 right-2'>
                <IconV1 iw='170' ih='170' />

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 z-[1] relative">
                <div className='border-2 border-yellow-500 border-dashed py-8 px-2 lg:px-10 flex flex-col gap-3 rounded-md'>
                    <div className='py-3 border-b border-gray65 mb-3'>
                        <h3 className='text-pc text-lg md:text-2xl lg:text-4xl text-center'>Friday, September 2nd</h3>
                    </div>
                    {
                        [...Array(5)].map((_, i) => <ScheduleCardItem />)
                    }
                </div>
                <div className='border-2 border-white border-dashed py-8 px-2 lg:px-10 flex flex-col gap-3 rounded-md'>
                <div className='py-3 border-b border-gray65 mb-3'>
                    <h3 className='text-pc text-lg md:text-2xl lg:text-4xl text-center'>Friday, September 2nd</h3>
                </div>
                {
                    [...Array(5)].map((_, i) => <ScheduleCardItem />)
                }
            </div>
            </div>

           
        </div>
    )
}

export default ScheduleCard



const ScheduleCardItem = () => {

    return <div className="py-3 px-2 flex justify-between items-center bg-transparent border border-[#686868] rounded-md hover:bg-pc transition-all duration-500">
        <h6 className='text-[10px] lg:text-2xl font-medium text-white'>URB Monroe</h6>
        <p className='text-xl font-medium text-white flex gap-2 items-center'>
            <span className='w-7 h-7 flex justify-center items-center text-sm bg-gray-50 bg-opacity-20 rounded-full'><BsClock /></span>
            <span className='text-[10px] lg:text-lg'>11:00am – 12:00pm</span>
        </p>
    </div>
}