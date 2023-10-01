import React from 'react'
import { NewsletterImg } from '../images'

const Newsletter = () => {

    const inputStyle = 'w-[80%] md:w-1/2 bg-transparent px-5 py-3 border outline-none'
    const container = 'flex flex-col md:flex-row gap-14 md:gap-0 justify-between items-center pb-0 bg-coolblue bg-opacity-5 p-5 md:px-10'

  return (
    <div className={container}>
            <div className='flex flex-col gap-7 p-5 md:p-10'>
                <p className='text-coolblue'>
                    Our Newsletter
                </p>
                <p className='text-2xl font-semibold md:w-2/3 leading-relaxed'>
                    Get Weekly Update. Sign Up And Get Up To 
                     <span className='text-coolblue underline'> 20% Off </span> 
                      Your First Purchase
                </p>
                <div className='flex justify-start items-center'>
                    <input
                     type='text' 
                     placeholder='Enter Your Email Address' 
                     className={inputStyle} />
                    <button className='btn'>Subscribe</button>
                </div>
            </div>

            <div className=''>
                <img
                 src={ NewsletterImg } 
                 className='object-contain' 
                 />
            </div>
        </div>
  )
}

export default Newsletter
