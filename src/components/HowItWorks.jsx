import React from 'react'
import HowItWorksComp from './HowItWorksComp'
import { Search,  AddToCart, Delivery, ShoppingBags } from '../images'

const HowItWorks = () => {
  return (
    <div className='px-10 pt-10 md:pt-20 md:px-20 text-center p-20'>
        <p className='text-xs text-coolblue'>Work Processing</p>
        <p className='text-2xl font-bold'>How It Work Processing</p>
        <div className='flex flex-col md:flex-row gap-1 justify-evenly mt-5'>
            <HowItWorksComp
             header='Filter & Discover' 
             text='Filtering & Suggestions make it easy to find' 
             image={ Search } 
             />

            <HowItWorksComp
             header='Add To Cart' 
             text='Select the correct items and add them to the cart' 
             image={ AddToCart } 
             />

            <HowItWorksComp
             header='Fast Shipping' 
             text='The carrier will confirm and ship quickly to you' 
             image={ Delivery } 
             />
             
            <HowItWorksComp
             header='Enjoy The Product' 
             text='The carrier will confirm and ship quickly to you' 
             image={ ShoppingBags } 
             />
        </div>
    </div>

  )
}

export default HowItWorks
