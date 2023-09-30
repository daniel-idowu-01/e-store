import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import data from '../data/contactData.json'
import fullMoon from '../images/full_moon.jpg'
import ContactComp from '../components/ContactComp'

import { motion } from 'framer-motion';

const ContactPage = () => {

  const formInfo = [
    {
      placeholder: "First Name",   
      type: "text",
      name: 'first_name'
    },
    {
      placeholder: "Email", 
      type: "email",
      name: "email"
    },
    {
      placeholder: "Subject",   
      type: "text",
      name: "subject"
    }
  ]
  
  return (
    <motion.div className='py-10'>
      <p className='text-center text-xs text-coolblue'>
        Our Locations
      </p>
      <p className='text-center md:text-2xl font-bold mt-2 md:mt-0'>
        Visit Our Offices Around The World
      </p>

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
            <h3 className='text-xl font-semibold'>
              Get In Touch
            </h3>
            <p className='text-xs opacity-80'>
              Send us a message and we'll respond as soon as possible
            </p>

            {/* Form */}
            <form action='#' className='flex flex-col gap-3 mt-5'>
              {
                formInfo.map((info) => (
                  <input 
                   name={info.name}
                   type={info.type} 
                   placeholder={info.placeholder}
                   className='md:text-lg outline-none rounded-md border px-4 py-2' 
                   required 
                  />
                ) )
              }
             
              <textarea
               placeholder='Message...'
               cols='30' 
               rows='6'
               className='md:text-lg rounded-md outline-none border px-4 py-2' 
               required 
              />

              <button type='submit' className='contact-btn'>Send Message</button>
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
