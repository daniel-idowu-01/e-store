import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

const TeamMember = (props) => {
  return (
    <div className='border p-2 mt-2 md:mt-0'>
      <img src={ props.img } alt='' className='h-80 w-full object-cover  rounded-md' />
      <div className='flex items-center justify-between p-2'>
        <div>
            <p className='font-semibold'>{ props.name }</p>
            <p className='text-xs'>{ props.job }</p>
        </div>
        <div>
            <AiFillPlusCircle className='text-3xl text-coolblue hover:text-opacity-70 hover:cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default TeamMember
