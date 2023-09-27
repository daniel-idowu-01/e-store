import React, { useEffect } from 'react'
import data from '../data/teamData.json'
import Footer from '../components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamMember from '../components/TeamMember'
import ClientComp from '../components/ClientComp'
import jsonData from '../data/testimonialData.json';
import NewsletterImg from '../images/newsletter_img.png'

import { BiPackage } from 'react-icons/bi'
import { ImHeadphones } from 'react-icons/im'
import { BsShieldCheck } from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'



const AboutPage = () => {

  // animation 
  const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation only triggers once
        threshold: 0.1, // Sets the visibility threshold for triggering the animation
    });

    useEffect(() => {
        if (inView) {
        controls.start({ opacity: 1, y: 0 });
        } else {
        controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    /* Div for whole Component */
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className=''>
      {/* Div for header section */}
      <header className='md:flex justify-center gap-10 px-5'>
        {/* Div for elements on the left */}
        <div className=''>
          <img
           src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
           alt='' />
        
          <div
           className='bg-coolblue relative -top-10 left-5 float-right w-fit px-5 py-2 text-xl md:text-2xl text-white border-white border-4 '>
            25 Years Of Experience
          </div>

        </div>
        
        {/* Div for elements on the right */}
        <div className='md:flex flex-col gap-3 md:w-1/2 mt-8 md:mt-0'> 
          <p className='text-xs text-coolblue mt-2 md:mt-0'>About Our Company</p>
          <p className='text-2xl font-bold mt-2 md:mt-0'>Online Shopping Includes Both Buying Things Online Market</p>
          <p className='text-sm opacity-70 text-justify mt-2 md:mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          {/* Div for elements on the bottom of the elements at the right */}
          <div className='flex gap-3 mt-2 md:mt-0 mb-10'>
            <div>
              <img
               src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
               alt=''
               className='h-32 rounded-2xl object-contain' />
            </div>

            {/* Div for listed items */}
            <div className='flex flex-col justify-between'>
              <div className='flex gap-1 items-center'>
                <IoMdCheckmarkCircleOutline className='text-coolblue' />
                <p className='text-sm'>We provide 100% best products</p>
              </div>

              <div className='flex gap-1 items-center'>
                <IoMdCheckmarkCircleOutline className='text-coolblue' />
                <p className='text-sm'>We satisfy customers</p>
              </div>

              <div className='flex gap-1 items-center'>
                <IoMdCheckmarkCircleOutline className='text-coolblue' />
                <p className='text-sm'>We provide the best services</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Qualities */}
      <div
       className='mb-20 flex flex-col md:flex-row md:border gap-7 justify-evenly p-2 mx-5 md:mx-14'>
        {/* Free Shipping */}
        <div className='flex items-center md:border-x-2'>
          <CiDeliveryTruck className='text-xl m-2 text-coolblue' />
          <div className='md:w-36'>
            <p className='text-sm font-semibold'>Free Shipping</p>
            <p className='text-xs capitalize'>Free Shipping on all US order or order above $100</p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className='flex items-center md:border-x-2'>
          <BsShieldCheck className='text-xl m-2 text-coolblue' />
          <div className='md:w-36'>
            <p className='text-sm font-semibold'>Secure Payment</p>
            <p className='text-xs capitalize'>Simply return it within 30 days for an exchange</p>
          </div>
        </div>

        {/* 14-day return */}
        <div className='flex items-center md:border-x-2'>
          <BiPackage className='text-xl m-2 text-coolblue' />
          <div className='md:w-36'>
            <p className='text-sm font-semibold'>14-Day Return</p>
            <p className='text-xs capitalize'>Simply return it within 30 days for an exchange</p>
          </div>  
        </div>

        {/* 24/7 support */}
        <div className='flex items-center md:border-x-2'>
          <ImHeadphones className='text-xl m-2 text-coolblue' />
          <div className='md:w-36'>
            <p className='text-sm font-semibold'>24/7 Support</p>
            <p className='text-xs capitalize'>Contact us 24 hours a day, 7 days a week</p>
          </div>    
        </div>
      </div>


      {/* Our Team */}
      <div className='mx-14 mb-20'>
        <p className='text-xs text-coolblue'>Our Team Members</p>
        <p className='text-2xl font-bold'>Expert Management Team</p>
        <div className='md:flex justify-between mt-5'>
          { data.members.map(member => (
            <TeamMember name={ member.name } job={ member.job } img={ member.img } />
          ))}
        </div>
        
      </div>



       {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

        {/* Testimonial */}
        <div className='text-center mt-20 bg-black bg-opacity-5 p-5 md:mx-14'>
            <p className='text-xs text-coolblue'>Our Testimonial</p>
            <p className='text-2xl font-bold'>What Our Clients Say</p>
            
            <div className='px-10'>
                <Carousel
                 responsive={responsive}>
                {  
                 jsonData.items.map(item => (
                    <ClientComp name={item.name} text={item.text} image={item.image} job={item.job}
                     />
                ))}
                </Carousel>
            </div>
        </div>

        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

        {/* Our Newsletter */}
        <div
         className='flex flex-col md:flex-row gap-14 md:gap-0 justify-between items-center mt-5 mx-10 md:mx-40 p-5 pb-0 bg-coolblue bg-opacity-5'>
            <div className='flex flex-col gap-3'>
                <p className='text-coolblue'>Our Newsletter</p>
                <p className='text-2xl font-semibold md:w-96'>Get Weekly Update. Sign Up And Get Up To <span className='text-coolblue underline'>20% Off</span> Your First Purchase</p>
                <div className='md:flex justify-end items-center'>
                    <input type='text' placeholder='Enter Your Email Address' className='w-full md:w-96 bg-transparent px-7 py-2 border rounded-full outline-none block' />
                    <button className='absolute bg-coolblue text-white py-2 px-7 mt-3 md:mt-0 rounded-full hover:opacity-80'>Subscribe</button>
                </div>
            </div>

            <div>
                <img src={ NewsletterImg } className=' md:w-80 object-contain' />
            </div>
        </div>


        {/* Footer */}
        <Footer />

    </motion.div>
  )
}

export default AboutPage
