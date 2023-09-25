import React from 'react'
import { useContext, useEffect } from 'react'
import CartContext from '../CartContext'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Cart = () => {

    const { items, calculateTotalPrice } =  useContext(CartContext);

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
      className='overflow-x-hidden mx-2 md:mx-10 mt-10'>

      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            <th className='bg-gray-300 p-3 font-semibold text-left'>ID</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'></th>
            <th className='bg-gray-300 p-3 font-semibold text-left'>Product</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'>Price</th>
          </tr>
        </thead>
        <tbody>
          { items.length 
            ? 
          items.map((item , key) => (
            <tr className='tr'>
              <td className='p-2'>{key}</td>
              <td className='p-2'><img className='w-20' src={item.image} alt='' /></td>
              <td className='p-2'>{item.name}</td>
              <td className='p-2'>${item.price}</td>
            </tr>
            )
          )
            : 
          <p>No items in cart</p> }  
        </tbody>
      </table>

      <section className='w-full md:w-1/4 md:float-rightn flex flex-col gap-2 border border-gray-500 p-3 mt-5'>
        <p className='text-xl flex justify-between'>
          <span className='text-semibold'>Subtotal: </span>
          ${calculateTotalPrice}
        </p>
        <p className='text-xl flex justify-between'>
          <span className='text-semibold'>Shipping: </span>
          ${ calculateTotalPrice === 0 ? 0 : 8}
        </p>
        <p className='text-xl flex justify-between'>
        <span className='text-semibold'>Total: </span> 
          ${ calculateTotalPrice === 0 ? calculateTotalPrice : calculateTotalPrice + 8}
        </p>

        <button className=' bg-coolblue w-full px-6 py-3 text-white'>Checkout</button>
      </section>
      
    </motion.div>
  )
}

export default Cart
