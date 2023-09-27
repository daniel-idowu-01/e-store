import { FullStar } from '../images'
import CartContext from '../context/CartContext'

import React, { useState, useContext } from 'react'
import FavoriteContext from '../context/FavoriteContext'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const ProductComp = ({name, image, price, rating, count}) => {

  /* const {alertMessage} = useContext(CartContext)
  const {alertWishList} = useContext(FavoriteContext)
  const {addToCart} = useContext(CartContext)
  const {addToFavorites} = useContext(FavoriteContext) */
  

  //function when item is added to cart
  /* const cartFunction = () => {
    addToCart(name, price, image);
    alertMessage();
  } */

  //function when item is added to wishlist
  /* const favoriteFunction = () => {
    addToFavorites(name, price, image);
    alertWishList();
  } */

  const rateAverage = (rate) => {
    if(rate >= 7) {
      return 'text-green-500'
    } 
    else if(rate > 5.5 && rate < 7) {
      return 'text-orange-400'
    } 
    else {
      return 'text-red-600'
    }
  }
  
  return (
    <div
     className={`hover:cursor-pointer hover:scale-105 h-64 relative w-full md:w-60`}>

        <img src={image} alt='' className='border h-52 w-full object-contain p-5' />

        <article className='flex flex-col gap-[10px] border bg-coolblue bg-opacity-5 p-2'>
          <div className='flex relative left-[48%]'>
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <p className='text-xs'>({count})</p>
          </div>

          <div className='text-center'>
              <p className='text-xs object-contain '>{name}</p>
          </div>

          <div className='flex justify-between'>
            <p className=''>${price}</p>
            <p className={`${rateAverage(rating)} text-sm`}>{rating}</p>
          </div>
      </article>
      

      {/* Elements to show on hover */}
        {/* <div
         className='absolute flex items-center justify-center top-0 w-full h-full'>
          <div className='flex gap-4'>
            <button
             onClick={cartFunction}
             className='inline-block text-3xl bg-coolblue rounded-full p-2 text-opacity-70 hover:text-white'> <AiOutlineShoppingCart /> </button>
            <button
            onClick={favoriteFunction}
             className='inline-block text-3xl bg-coolblue rounded-full p-2 text-opacity-70 hover:text-white'> <AiOutlineHeart /> </button>
          </div>
        </div> */}
        
    </div>
  )
}

export default ProductComp
