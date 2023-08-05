import Icon from '@/components/logoicon/logoIcon'
import React from 'react'

type Props = {
    author: string,
    date: string
}

const AuthorCard = ({ author, date }: Props) => {
    return (
        <div className='flex items-center gap-3 lg:gap-8 md:gap-5'>
            <div>
                <Icon width='w-10' height='h-10' iw='30' ih='30' />
            </div>
            <div className=''>
                <h3 className='text-base font-medium text-sc'>{author}</h3>
                <p className='text-sc text-xs font-medium mb-3'>{date}</p>
            </div>
        </div>
    )
}

export default AuthorCard