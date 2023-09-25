import React from 'react'
import { Stores } from '../images'
import data from '../data/footerData.json'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'


const Footer = () => {

  const title = ' '
  const footerStyle = 'border grid md:grid-cols-4 md:place-items-center px-10 md:px-20 py-20 mt-20 gap-8 md:gap-0 text-left'

  return (
    <footer className={footerStyle}>
      {/* Footer */}
            <div className='flex flex-col gap-3 '>
                <p className='font-bold'>
                  <span className='text-coolblue italic text-lg'>
                    E
                  </span>
                  -STORE
                </p>
                <p>
                  {title}
                </p>
                <p> 
                  <AiOutlineMail 
                   className=' inline-block text-coolblue mr-1' 
                  /> 
                    info@mydomain.com
                </p>

                <p> 
                  <AiOutlinePhone 
                   className=' inline-block text-coolblue mr-1' 
                  /> 
                    +234 902 868 6300
                </p>
            </div>

            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Customer Services</h3>
                {
                  data.customerServices.map((service) => (
                    <p> 
                      <IoIosArrowForward 
                       className=' inline-block' 
                      /> 
                        {service.info}
                      </p>
                  ))
                }
            </div>

            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Quick Link</h3>
                {
                  data.quickLinks.map((link) => (
                    <p> 
                      <IoIosArrowForward 
                       className=' inline-block' 
                      /> 
                        {link.info}
                      </p>
                  ))
                }
            </div>


            <div className=' flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>Download App</h3>
                <p>Save $3 With App & New User Only</p>
                <img src={ Stores } alt='' className=' h-28 md:w-1/2 object-contain mt-2' />
            </div>
    </footer>
  )
}

export default Footer
