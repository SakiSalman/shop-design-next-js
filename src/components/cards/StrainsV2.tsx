import React from 'react'
import Icon from '../logoicon/logoIcon'

type Props = {}

const StrainsV2 = (props: Props) => {
  return (
    <div className="p-4 lg:p-3 border border-gray-200 rounded-md flex gap-3 justify-between items-center">
    <div className='flex items-center justify-between gap-4 md:gap-5'>
       <div>
       <Icon width='w-10' height='h-10' iw='30' ih='30'/>
       </div>
        <div className=''>
            <h3 className='text-base font-medium text-sc'>Series I</h3>
            <p className='text-sc text-xs font-medium mb-3'>Product <span>(10)</span></p>
        </div>
    </div>    
</div>
  )
}

export default StrainsV2