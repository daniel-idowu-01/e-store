import React from 'react'
import { HeaderImage } from '../images'
import { TbTruckReturn } from 'react-icons/tb'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const Header = () => {

    const imageBubble = 'absolute -z-10 rounded-full bg-black opacity-[0.02]'
    const headerContainer = 'flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0'
    const itemsStyle = 'flex flex-col md:flex-row shadow-lg justify-evenly relative top-24 md:top-10 divide-y-2 md:divide-y-0 md:divide-x-2 md:w-1/2 mx-auto md:m-0 bg-white'

  return (
    <section className='px-10 pt-10 md:pt-20 md:px-20 border-b-2'>
        {/* div to style the container of the header elements */}
        <article className={headerContainer}>
            {/* header content */}
            <div className='flex flex-col gap-7 md:gap-10'>
                <p className='capitalize text-xl md:text-2xl'>
                    In this season, find the best
                </p>
                <p className='text-3xl md:text-6xl font-semibold md:w-11/12 leading-relaxed'>
                    Exclusive Collection For Everyone
                </p>
                <p className='text-lg md:text-xl leading-relaxed md:w-11/12'>
                    Here's A Voice That Keeps On Calling Me Down The Road. That's Where I'll Always Be
                </p>
                <button className='btn'>Shop Now</button>
            </div>

            {/* header image */}
            <div className='relative flex justify-center items-center '>
                <span
                className={`${imageBubble} w-72 h-72 md:w-96 md:h-96`}>
                </span>
                <span
                className={`${imageBubble} -top-16 left-28 w-14 h-14`}>
                </span>
                <span
                className={`${imageBubble} -top-20 left-10 w-10 h-10`}>
                </span>
                <img src={ HeaderImage } className='w-[90%] md:w-[80%]' alt=''  />
            </div>
        </article>

        {/* div for the features section */}
        <article className={itemsStyle}>
            <div className='flex items-center gap-2 p-5'>
                <MdOutlineLocalShipping />
                <div>
                    <p>Free Shipping</p>
                    <p className='text-xs'>$39 Per Order</p>
                </div>
            </div>

            <div className='flex items-center gap-2 p-5'>
                <TbTruckReturn />
                <div>
                    <p>14-Day Return</p>
                    <p className='text-xs'>Shop With Confidence</p>
                </div>
            </div>

            <div className='flex items-center gap-2 p-5'>
                <RiCustomerService2Fill />
                <div>
                    <p>24/7 Support</p>
                    <p className='text-xs'>Delivered To Your Door</p>
                </div>  
            </div>
        </article>
    </section>
  )
}

export default Header
