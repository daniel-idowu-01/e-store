import React from 'react'
import { TimerImg } from '../images'
import CountdownTimer from './CountdownTimer'

const Timer = () => {

    const upToStyle = 'w-28 h-28 text-white text-center text-xl pt-2 px-5 bg-coolblue circle relative left-1/4'

  return (
    <section
     className='flex flex-col md:flex-row justify-center px-10 mt-20'>
        {/* Div for timer content section */}
        <article
         className='flex flex-col gap-5 p-5 md:p-10 md:w-1/2 bg-black bg-opacity-5'>
            {/* Div to flex DEAL OF THE WEEK & 20% OFF */}
            <div
             className='flex flex-col md:flex-row gap-5 md:gap-0'>
                <div>
                    <p className='text-xs text-coolblue'>
                        Deal Of The Week
                    </p>
                    <p className='text-2xl font-semibold'>
                        Deal Of The Week. Let's Go Shopping Today
                    </p>
                </div>

                <div>
                    <p className={upToStyle}>
                        Up To <span className='text-2xl'>28%</span> Off
                    </p>
                </div>
            </div>

            <p>
                Hurry Up! Offer Ends In
            </p>

            <CountdownTimer />
            <button className='btn'>Shop Now</button>
        </article>

        {/* Div for Image section */}
        <article className='bg-coolblue bg-opacity-5'>
            <img
             src={ TimerImg } 
             alt='' 
             className='relative md:top-[10px] h-52 md:h-96 object-contain' 
             />
        </article>
        
    </section>
  )
}

export default Timer
