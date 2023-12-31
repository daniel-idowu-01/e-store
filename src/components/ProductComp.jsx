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
     className='hover:cursor-pointer hover:scale-105 relative w-72 md:w-60'>

        <img src={image} alt='' className='border h-52 w-full object-contain p-5' />

        <article className='relative flex flex-col gap-[10px] border bg-coolblue bg-opacity-5 p-2'>
          <div className='flex relative right-0'>
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <p className='text-xs'>({count})</p>
          </div>

          <div>
              <p className='text-sm text-left'>{name}</p>
          </div>

          <div className='flex justify-between'>
            <p className=''>${price}</p>
            <p className={`${rateAverage(rating)} text-sm`}>{rating}</p>
          </div>
      </article>
        
    </div>
  )
}

export default ProductComp
