import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import AuthorCard from './AuthorCard'

type Props = {}

const BlogHeader = (props: Props) => {
    return (
        <div>
            <div className='w-full h-[300px] lg:h-[650px] overflow-hidden relative'>
                <Image
                    fill
                    src={'/images/blog/blog-1.png'}
                    alt=''
                    className='object-cover'
                />
            </div>
            {/* desktop view */}
            <div className="hidden lg:flex gap-x-5 flex-col lg:flex-row py-8 border-b">
                <div className="flex flex-col gap-3 items-center text-sc w-28">
                    <p className='text-gray65 text-xs font-medium'>Share on:</p>
                    <BiLogoFacebook className="hover:text-pc transition-all duration-500" />
                    <BsInstagram  className="hover:text-pc transition-all duration-500"/>
                    <BsTwitter  className="hover:text-pc transition-all duration-500"/>
                    <FaLinkedinIn  className="hover:text-pc transition-all duration-500"/>
                </div>
                <div className=''>
                    <h1 className='uppercase text-2xl text-sc font-medium'>KEVIN NASH, FOUNDING MEMBER OF NWO, DEBUTS NEW JACKKNIFE STRAIN WITH HYMAN CANNABIS, ANNOUNCES LOCAL SIGNING TOUR</h1>
                    <div className='mt-5'>
                        <AuthorCard author='Hyman' date='24 June, 2023 ' />
                    </div>
                </div>
            </div>
            {/* desktop view end*/}

            {/* mobile view */}
            <div className='w-full lg:hidden py-4 border-b'>
                <h1 className='uppercase text-xl lg:text-2xl text-sc'>KEVIN NASH, FOUNDING MEMBER OF NWO, DEBUTS NEW JACKKNIFE STRAIN WITH HYMAN CANNABIS, ANNOUNCES LOCAL SIGNING TOUR</h1>

                <div className='mt-3 flex justify-between'>
                    <div className=''>
                        <AuthorCard author='Hyman' date='24 June, 2023 ' />
                    </div>
                    <div className="flex gap-3 items-center text-sc">
                        <p className='text-gray65 text-xs font-medium'>Share on:</p>
                        <BiLogoFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            {/* mobile view end */}

        </div>
    )
}

export default BlogHeader