import { FullStar } from '../images'
import CartContext from '../context/CartContext'

import React, { useState, useContext } from 'react'
import FavoriteContext from '../context/FavoriteContext'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const ProductComp = ({name, price, image, count}) => {

  const {alertMessage} = useContext(CartContext)
  const {alertWishList} = useContext(FavoriteContext)
  const {addToCart} = useContext(CartContext)
  const {addToFavorites} = useContext(FavoriteContext)
  

  //function when item is added to cart
  const cartFunction = () => {
    addToCart(name, price, image);
    alertMessage();
  }

  //function when item is added to wishlist
  const favoriteFunction = () => {
    addToFavorites(name, price, image);
    alertWishList();
  }
  
  return (
    <div
     className={` relative h-80 w-full md:w-60 m-1`}>
      
      <div className={`'opacity-50'}`}>
        <img src={image} alt='' className='border h-52 w-full object-contain' />

        <div className='border bg-coolblue bg-opacity-5'>
          <div className='flex relative left-1/2 p-2'>
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <img src={ FullStar } alt='' className='h-4 w-4' />
            <p className='text-xs'>({count})</p>
          </div>

          <div className='text-center px-2'>
              <p className='text-xs '>{name}</p>
          </div>

          <div className='flex justify-between p-2'>
            <p className='text-sm font-semibold '>${price}</p>
          </div>
      </div>
      

      {/* Elements to show on hover */}
        <div
         className='absolute flex items-center justify-center top-0 w-full h-full'>
          <div className='flex gap-4'>
            <button
             onClick={cartFunction}
             className='inline-block text-3xl bg-coolblue rounded-full p-2 text-opacity-70 hover:text-white'> <AiOutlineShoppingCart /> </button>
            <button
            onClick={favoriteFunction}
             className='inline-block text-3xl bg-coolblue rounded-full p-2 text-opacity-70 hover:text-white'> <AiOutlineHeart /> </button>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default ProductComp
