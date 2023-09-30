import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

const TeamMember = ({ name, job, img }) => {

  const iconStyle = 'text-4xl text-coolblue hover:text-opacity-70 hover:cursor-pointer'

  return (
    <section className='w-full border p-2'>
      <img
       src={ img } 
       alt='' 
       className='h-80 w-full object-cover rounded-md' 
       />

      <article className='flex items-center justify-between p-3'>
        <div>
            <p className='font-semibold'>
              { name }
            </p>
            <p className='text-xs'>
              { job }
            </p>
        </div>
        <div>
            <AiFillPlusCircle
             className={iconStyle} 
             />
        </div>
      </article>
    </section>
  )
}

export default TeamMember
