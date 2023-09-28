import React,  { useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header, FeaturedProd, HowItWorks, Timer, Footer, Testimonials, Newsletter } from '../components';

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

        <Newsletter />

        <Footer />
      
    </motion.div>
  )
}

export default HomePage
