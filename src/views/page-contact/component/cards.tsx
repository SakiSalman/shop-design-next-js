import React from 'react'
import {IoLocationSharp,IoCallSharp,IoMail} from 'react-icons/io5'
const Cards = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <SingleCard icon={<IoLocationSharp/>}>
                        <p>1727 Crooks Rd, Troy, MI,</p>
                        <p>United States, Michigan</p>
            </SingleCard> 
            <SingleCard icon={<IoMail/>}>
                        <p>1727 Crooks Rd, Troy, MI,</p>
                        <p>United States, Michigan</p>
            </SingleCard> 
            <SingleCard icon={<IoCallSharp/>}>
                        <p>1234565</p>
            </SingleCard> 
        </div>
    </div>
  )
}

export default Cards

type props ={
    icon?: React.ReactNode;
    children: React.ReactNode;
}
export const SingleCard = (p: any) => {
    return (
        <div className='border flex justify-start items-center gap-3 p-6 rounded-md'>
        <div className='bg-pc p-2 text-white text-xl md:text-3xl rounded-md'>
            {p.icon}
        </div>
        <div className='text-xs md:text-xl font-medium'>
            {p.children}
        </div>
    </div>
    );
  };


