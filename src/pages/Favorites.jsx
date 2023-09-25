import CartContext from '../context/CartContext'
import React, { useContext, useEffect } from 'react'
import FavoriteContext from '../context/FavoriteContext'

import { motion, useAnimation } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';

const Favorites = () => {

    const {addToCart} = useContext(CartContext)
    const {favorites} =  useContext(FavoriteContext);

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
        {/* Table headers */}
        <thead>
          <tr>
            <th className='bg-gray-300 p-3 font-semibold text-left'>ID</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'>Name</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'>Age</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'>Price</th>
            <th className='bg-gray-300 p-3 font-semibold text-left'></th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {favorites.length > 0 
            ?
          favorites.map((favorite , key) => (
            <tr className='tr'>
              <td className='p-2'>{key}</td>
              <td className='p-2'><img className='w-20' src={favorite.image} alt='' /></td>
              <td className='p-2'>{favorite.name}</td>
              <td className='p-2'>${favorite.price}</td>
              <td>
                <AiOutlineShoppingCart
                 onClick={() => addToCart(favorite.name, favorite.price, favorite.image)}
                 className='text-2xl hover:text-coolblue hover:cursor-pointer' />
              </td>
            </tr>
            )
          )
           : 
          <p>No item in wish list</p> }

        </tbody>
      </table>
    </motion.div>
  )
}

export default Favorites;
