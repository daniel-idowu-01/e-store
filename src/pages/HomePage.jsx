import { NewsletterImg } from '../images';
import React,  { useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header, FeaturedProd, HowItWorks, Timer, Footer, Testimonials } from '../components';



const HomePage = () => {

    // Animation
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
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden'>

        <Header />
        
        <FeaturedProd />

        <HowItWorks />

        <Timer />

        <Testimonials />

        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

        {/* Our Newsletter */}
        <div className='flex flex-col md:flex-row gap-14 md:gap-0 justify-between items-center mt-5 mx-10 md:mx-40 mb-20 p-5 pb-0 bg-coolblue bg-opacity-5'>
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

export default HomePage
