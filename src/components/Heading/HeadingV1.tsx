import React from 'react'

type Props = {
    title ?: string,
    subTitle? : string
}

const HeadingV1 = (props: Props) => {
  return (
    <div className='text-center'>
    <p className='text-base text-pc font-medium'>Our Projects</p>
    <p className='text-xl md:text-4xl font-font650 my-2 text-sc'>Explore Our Collaborations</p>
    </div>
  )
}

export default HeadingV1