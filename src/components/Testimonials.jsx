import React, { useState, useEffect } from 'react'
import ClientComp from './ClientComp'
import testimonialData from '../data/testimonialData.json';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

    // to change the number of slide based on the width of the screen
    const [slide, setSlide] = useState(1)

    useEffect(() => {
        if(window.innerWidth > 768) {
            setSlide(3)
        } else {
            setSlide(1)
        }
    }, [window.innerWidth])

  return (
    <div className='text-center bg-black bg-opacity-5 p-10 mt-20 px-10 md:px-20'>
        <p className='text-xs text-coolblue'>Our Testimonial</p>
        <p className='text-2xl font-bold'>What Our Clients Say</p>
        
        <div className='px-10'>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={slide}
            navigation
            pagination={{ clickable: true }}
            >
                {testimonialData.items.map((testimonial) => (
                    <SwiperSlide>
                        <ClientComp {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials
