import jsonData from '../data/data.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TbTruckReturn } from 'react-icons/tb'
import React,  { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

import { HowItWorks, ProductComp, ClientComp, CountDown, Footer } from '../components';
import { Search, AddToCart, Delivery, ShoppingBags, NewsletterImg, TimerImg, HomeImg } from '../images';



const HomePage = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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


    // API call
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setItems(json)
        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
          });
    }, [])

      /* Action when content is loading */
  if (isLoading) {
    return (
        <div className='flex justify-center items-center'>
            <p className='text-3xl'>Loading...</p>
        </div>
        
    )
  }

  /* Action when content contains error */
  if (error) {
    return (
        <div className='flex justify-center items-center'>
            <p className='text-3xl'>Error: {error.message}</p>
        </div>
        
    )
  }

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
        {/* Header */}
        <div className='md:flex justify-center items-center mt-5 md:mt-0 mx-10'>
            <div className='flex flex-col gap-7 md:w-1/2'>
                <p className='capitalize'>In this season, find the best</p>
                <p className='text-3xl md:text-5xl font-bold w-auto'>Exclusive Collection For Everyone</p>
                <p className='text-sm md:w-96 '>Here's A Voice That Keeps On Calling Me Down The Road. That's Where I'll Always Be</p>
                <button className='text-white bg-coolblue p-3 px-5 w-1/2 md:w-1/4 rounded-full hover:opacity-80'>Shop Now</button>

                {/* Design For Laptop */}
                <div className='hidden md:flex shadow-lg justify-evenly relative top-32 divide-x-2'>
                    <div className='flex items-center gap-2 p-5'>
                        <MdOutlineLocalShipping className='h-fit' />
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
                </div>

            </div>

            <div className='flex justify-center items-center '>
                <span
                 className='absolute -z-10  w-72 h-72 md:w-96 md:h-96 rounded-full rotate-45 bg-black  opacity-5'>
                </span>
                <span
                 className='relati~~zve -z-10 w-20 h-20 -top-40 rounded-full rotate-45 bg-black opacity-5'>
                </span>
                <span
                 className='relative -z-10 w-10 h-10 -top-60 rounded-full rotate-45 bg-black opacity-5'>
                </span>
                <span
                 className='relative -z-10 w-5 h-5 -top-72 -left-24 rounded-full rotate-45 bg-black opacity-5'>
                </span>
                <img src={ HomeImg } className='' alt=''  />
            </div>

             {/* Design For Mobile */}
                <div className=' md:hidden shadow-lg justify-center items-center px-10 md:px-5 divide-y-2 '>
                    <div className='flex justify-center items-center gap-2 p-5'>
                        <MdOutlineLocalShipping className='' />
                        <div>
                            <p className='text-sm md:text-md font-bold'>Free Shipping</p>
                            <p className='text-xs'>$39 Per Order</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-2 p-5'>
                        <TbTruckReturn />
                        <div>
                            <p className='text-sm md:text-md font-bold'>14-Day Return</p>
                            <p className='text-xs'>Shop With Confidence</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-2 p-5'>
                        <RiCustomerService2Fill />
                        <div>
                            <p className='text-sm md:text-md font-bold'>24/7 Support</p>
                            <p className='text-xs'>Delivered To Your Door</p>
                        </div>  
                    </div>
                </div>
        </div>
        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

        {/* Featured Product */}
        <div className='mt-20 mx-10'>
            <div className='text-center'>
                <p className='text-xs text-coolblue'>Featured Products</p>
                <p className='text-2xl font-bold'>Our Featured Collection</p>
                <div className='md:flex mt-5'>
                    { items.map((item, index) => {
                        return (
                            <ProductComp
                             key={index}
                              name={item.title}
                               image={item.image}
                                price={item.price}
                                 rating={item.rating.rate}
                                  count={item.rating.count}
                            />
                        )
                    })}
                </div>
                
            </div>
        </div>

        {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

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
