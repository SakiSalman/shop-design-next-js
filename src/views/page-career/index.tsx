import React, { Fragment } from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {FiDollarSign} from 'react-icons/fi'
import ButtonPrimary from '@/components/butttons/ButtonPrimary'
import CareerCard from '@/components/cards/CareerCard'
const CareerUi = () => {
  return (
    <Fragment>
        <div className='_container py-12'>
            <div className='text-center mb-6'>
                <p className='text-xl md:text-4xl font-font650 mb-2'>Browse Jobs By Specialisms</p>
                <p className='text-xs md:text-lg text-[#5A5A5A] md:text-black'>8 jobs live</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6'>
            {
                [1,2,3,4,5,6,7].map((i)=>(
                    <CareerCard key={i}/>
                ))
            }
            </div>
        </div>
    </Fragment>
  )
}

export default CareerUi