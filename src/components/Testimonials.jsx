import React from 'react'
import ClientComp from './ClientComp'
import testimonialData from '../data/testimonialData.json';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

  return (
    <div className='text-center bg-black bg-opacity-5 p-10 mt-20 px-10 md:px-20'>
        <p className='text-xs text-coolblue'>Our Testimonial</p>
        <p className='text-2xl font-bold'>What Our Clients Say</p>
        
        <div className='px-10'>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
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
