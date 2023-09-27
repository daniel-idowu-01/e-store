import jsonData from '../data/data.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React,  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header, HowItWorks, ClientComp, FeaturedProd, CountDown, Footer } from '../components';
import { Search, AddToCart, Delivery, ShoppingBags, NewsletterImg, TimerImg } from '../images';



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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden'>

        <Header />
        
        <FeaturedProd />

        {/* How It Works */}
        <div className='text-center mt-20 md:px-0'>
            <p className='text-xs text-coolblue'>Work Processing</p>
            <p className='text-2xl font-bold'>How It Work Processing</p>
            <div className='md:flex justify-evenly mt-5 px-10'>
                <HowItWorks header='Filter & Discover' text='Filtering & Suggestions make it easy to find' image={ Search } />
                <HowItWorks header='Add To Cart' text='Select the correct items and add them to the cart' image={ AddToCart } />
                <HowItWorks header='Fast Shipping' text='The carrier will confirm and ship quickly to you' image={ Delivery } />
                <HowItWorks header='Enjoy The Product' text='The carrier will confirm and ship quickly to you' image={ ShoppingBags } />
            </div>
        </div>

        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

        {/* Timer */}
        <div className='md:flex justify-center px-10 mt-20'>
            {/* Div for timer section */}
            <div className='md:flex flex-col gap-5 p-5 md:w-1/2 bg-black bg-opacity-5'>
                {/* Div to flex DEAL OF THE WEEK & 20% OFF */}
                <div className='md:flex justify-between items-center'>
                    <div>
                        <p className='text-xs text-coolblue'>Deal Of The Week</p>
                        <p className='text-2xl font-bold mt-3 md:mt-0'>Deal Of The Week. Let's Go Shopping Today</p>
                    </div>

                    <div className='mt-5 md:mr-5 md:mt-0'>
                        <p className='w-28 h-28 text-white text-center text-xl pt-2 px-5 bg-coolblue circle relative left-1/4'>Up To <span className='text-2xl'>28%</span> Off</p>
                    </div>
                </div>

                <p className='my-3 md:mt-0'>Hurry Up! Offer Ends In</p>

                <CountDown />
                <button className='md:w-1/4 mt-5 md:mt-0 text-white bg-coolblue p-3 px-5 rounded-full hover:opacity-80'>Shop Now</button>
            </div>

            {/* Div for Image */}
            <div className='border bg-coolblue bg-opacity-5'>
                <img src={ TimerImg } alt='' className='h-52 md:h-96 object-contain' />
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
