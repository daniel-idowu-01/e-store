import React from 'react'
import { useState, useEffect } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'


const ClientComp = ({ name, text, image, job}) => {

  return (
    <div className='border shadow-lg bg-white w-fit p-5 mx-1 my-3'>
      <RiDoubleQuotesL className=' text-coolblue' />
      <p className='w-auto md:w-80 text-justify'>{ text }</p>
      <RiDoubleQuotesL className='float-right rotate-180 text-coolblue' />

      <div className='flex items-center mt-2'>
        <img src={ image } alt='' className='h-14 w-14 object-contain' />
        <div className='ml-2'>
          <p>{ name }</p>
          <p className='opacity-75 text-sm '>{ job }</p>
        </div>
        
      </div>
    </div>
  )
}

export default ClientComp
