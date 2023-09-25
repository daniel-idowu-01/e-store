import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import Stores from '../images/stores.png'


const Footer = () => {
  return (
    <div className='grid md:grid-cols-4 px-10 mt-20 md:px-0 md:mx-20 gap-8 md:gap-0 text-center md:text-left mb-10 '>
      {/* Footer */}
            <div className=' flex flex-col gap-3 '>
                <p className=' font-bold'><span className='text-coolblue italic text-lg'>E</span>-STORE</p>
                <p>E-STORE Is An Exciting Brand Which Focuses On High-Quality Products Graphics With Style</p>
                <p> <AiOutlineMail className=' inline-block text-coolblue' /> info@mydomain.com</p>
                <p> <AiOutlinePhone className=' inline-block text-coolblue' /> +234 902 868 6300</p>
            </div>


            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Customer Services</h3>
                <p> <IoIosArrowForward className=' inline-block ' /> Collections & Delivery</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Returns & Refund</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Terms & Conditions</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Delivery Return</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Store Locations</p>
            </div>


            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Quick Link</h3>
                <p> <IoIosArrowForward className=' inline-block ' /> Privacy Policy</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Terms Of Use</p>
                <p> <IoIosArrowForward className=' inline-block ' /> FAQ</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Contact</p>
                <p> <IoIosArrowForward className=' inline-block ' /> Login / Register</p>
            </div>


            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Download App</h3>
                <p>Save $3 With App & New User Only</p>
                <img src={ Stores } alt='' className=' h-28 md:w-1/2 object-contain' />
            </div>
    </div>
  )
}

export default Footer
