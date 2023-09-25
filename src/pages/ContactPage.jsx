import React from 'react'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactComp from '../components/ContactComp'
import data from '../contactData.json'
import fullMoon from '../images/full_moon.jpg'
import Footer from '../components/Footer'

const ContactPage = () => {

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
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}>
      <p className='text-center text-xs text-coolblue mt-3'>Our Locations</p>
      <p className='text-center  md:text-2xl font-bold mt-2 md:mt-0'>Visit Our Offices Around The World</p>

      <section className='mt-5'>
      {/* Contacts */}
        { data.contacts.map((contact, key) => (
            <ContactComp
              key={key}
              office={contact.office}
              img={contact.img}
              email={contact.email}
              website={contact.website}
              phone={contact.phone}
              />
        ))}
      </section>


      {/* Contact Us */}
      <section
       className=' md:flex md:justify-evenly items-center bg-coolblue bg-opacity-5 px-10 md:px-0 py-10'>
          {/* Left Section */}
          <div className=''>
            <h3 className='text-xl font-semibold'>Get In Touch</h3>
            <p className='text-xs opacity-80'>Send us a message and we'll respond as soon as possible</p>

            {/* Form */}
            <form action='#' className='flex flex-col gap-3 mt-5'>
              <div className=' flex flex-col md:flex-row gap-3 justify-between'>
                <input type='text' placeholder='First Name'
                 className=' md:text-sm outline-none rounded-full border px-4 py-2' required />
                <input type='text' placeholder='Last Name'
                 className=' md:text-sm outline-none rounded-full border px-4 py-2' />  
              </div>

              <div className=' flex flex-col md:flex-row gap-3 justify-between'>
                <input type='email' placeholder='Email'
                 className=' md:text-sm outline-none rounded-full border px-4 py-2' required />
                <input type='phone' placeholder='Phone number'
                 className=' md:text-sm outline-none rounded-full border px-4 py-2' required />  
              </div>

              <input type='text' placeholder='Subject'
               className=' md:text-sm md:w-full block outline-none rounded-full border px-4 py-2' required />
              <input type='textarea' placeholder='Message...'
               className=' md:text-sm md:w-full block outline-none rounded-full border px-4 py-2' required />
              <button type='submit' className='text-sm w-1/2 bg-coolblue hover:bg-opacity-75 text-white px-5 py-2 rounded-full'>Send Message</button>
            </form>
          </div>

          {/* Right Section */}
          <div className='w-1/4'>
            <img className=' hidden md:block' src={fullMoon} alt='' />
          </div>
      </section>

      

      {/* Footer */}
      <Footer />


      
    </motion.div>
  )
}

export default ContactPage
