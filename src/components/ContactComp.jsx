import React from 'react'
import FullMoon from '../images/full_moon.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'


const ContactComp = (props) => {
  return (
    <main
     className='flex flex-col md:flex-row gap-2 items-center justify-evenly border px-5 py-5 mx-10 md:mx-20 mb-5'>
        <p
         className='md:w-1/4 text-center font-semibold text-xl'>
          { props.office }
          </p>

        {/* //////////////// */}

        <div className='flex justify-center'>
            <img src={ props.img } className='rounded-md' alt='' />
        </div>

        {/* //////////////// */}

        <div className='md:w-1/4 flex flex-col gap-3 mt-2 md:mt-0'>
            <p> <AiOutlineMail className='inline-block mr-1' />{ props.email }</p>
            <p> <BsGlobe2 className='inline-block mr-1' />{ props.website }</p>
            <p> <AiOutlinePhone className='inline-block mr-1' />{ props.phone }</p>
        </div>
        {/* //////////////// */}

        <div className='md:w-1/4 mt-2 md:mt-0'>
            <button
             className='bg-coolblue text-white rounded-full px-7 py-2 hover:bg-opacity-75'>
              View Location
            </button>
        </div>
      
    </main>
  )
}

export default ContactComp
