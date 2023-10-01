import React, { useEffect } from 'react'
import data from '../data/teamData.json'
import Footer from '../components/Footer';
import 'react-multi-carousel/lib/styles.css';
import TeamMember from '../components/TeamMember'
import ClientComp from '../components/ClientComp'
import jsonData from '../data/testimonialData.json';
import NewsletterImg from '../images/newsletter_img.png'
import { Newsletter, Testimonials } from '../components';

import { BiPackage } from 'react-icons/bi'
import { ImHeadphones } from 'react-icons/im'
import { BsShieldCheck } from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'



const AboutPage = () => {

  const aboutImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'

  const aboutImage2 ='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'

  const qualitiesStyle = 'mb-20 flex flex-col md:flex-row md:border gap-7 justify-evenly px-10 md:px-20 py-10 md:py-0'

  const experienceStyle = 'bg-coolblue relative -top-10 left-5 float-right w-fit px-5 py-2 text-xl md:text-2xl text-white border-white border-4'

  const aboutSummary = "At ShopBliss, we're dedicated to making your online shopping experience as seamless and enjoyable as possible. With a wide range of products, incredible deals, and user-friendly features, we're here to redefine the way you shop online. We offer fast and reliable shipping options to get your purchases to your doorstep in no time."

  const benefitsData = [
    {
      title: "We satisfy customers"
    },
    {
      title: "We provide the best services"
    },
    {
      title: "We provide 100% best products"
    }
  ]

  const qualitiesData = [
    {
      icon: <CiDeliveryTruck />,
      header: "Free Shipping",
      text: "Free Shipping on all US order or order above $100"
    },
    {
      icon: <BsShieldCheck />,
      header: "Secure Payment",
      text: "Simply return it within 30 days for an exchange"
    },
    {
      icon: <BiPackage />,
      header: "14-Day Return",
      text: "Simply return it within 30 days for an exchange"
    },
    {
      icon: <ImHeadphones />,
      header: "24/7 Support",
      text: "Contact us 24 hours a day, 7 days a week"
    },
  ]

  return (
    /* Div for whole Component */
    <motion.div
      className=''>

      {/* Div for header section */}
      <header className='flex flex-col md:flex-row justify-between px-10 md:px-20 py-10'>

        {/* Div for elements on the left */}
        <article className=''>
          <img
           src={aboutImage}
           alt='' 
           />
        
          <div
           className={experienceStyle}
           >
            25 Years Of Experience
          </div>

        </article>
        
        {/* Div for elements on the right */}
        <article className='flex flex-col gap-3 md:w-[60%]'> 
          <p className='text-xs text-coolblue'>
            About Our Company
          </p>
          <p className='text-2xl font-bold'>
            Online Shopping Includes Both Buying Things Online Market
          </p>
          <p className='text-base opacity-70 text-justify'>
            {aboutSummary}
          </p>

          {/* Div for elements on the bottom of the elements at the right */}
          <div className='flex gap-3'>
            <div>
              <img
               src={aboutImage2}
               alt=''
               className='h-32 rounded-2xl object-contain' 
               />
            </div>

            {/* Div for benefit items */}
            <div className='flex flex-col justify-between'>
                {
                  benefitsData.map((data) => (
                    <div className='flex gap-1 items-center'>
                      <IoMdCheckmarkCircleOutline className='text-coolblue' />
                      <p className='text-sm'>
                        {data.title}
                      </p>
                    </div>
                  ))
                }
            </div>

          </div>
        </article>
      </header>

      {/* Qualities */}
      <div
       className={qualitiesStyle}>
        {
          qualitiesData.map(data => (
            <div className='flex items-center border-l-2 md:border-x-2 px-4 py-5'>
              <p className='text-2xl text-coolblue m-1'>
                {data.icon}
              </p>

              <div className='md:w-36'>
                <p className='text-sm font-semibold'>
                  {data.header}
                </p>
                <p className='text-xs capitalize'>
                  {data.text}
                </p>
              </div>
            </div>
          ))
        }
      </div>

      {/* Our Team */}
      <div className='px-10 md:px-20 py-10'>
        <p className='text-center text-xs text-coolblue'>
          Our Team Members
        </p>
        <p className='text-center text-2xl font-bold'>
          Expert Management Team
        </p>
        <div className='flex flex-col md:flex-row justify-between gap-5 py-5'>
          { data.members.map(member => (
            <TeamMember {...member} />
          ))}
        </div>
        
      </div>

      {/* Testimonial */}
      <Testimonials />


      {/* Our Newsletter */}
      <Newsletter />


      {/* Footer */}
      <Footer />

    </motion.div>
  )
}

export default AboutPage
