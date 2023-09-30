import { useParams } from 'react-router'
import CartContext from '../context/CartContext'
import ClipLoader from "react-spinners/ClipLoader";
import Notification from '../components/Notification'
import { Recommend } from '../components'
import FavoriteContext from '../context/FavoriteContext'
import React, { useEffect, useState, useContext } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const {addToCart, quantity, setQuantity} = useContext(CartContext)
    const {addToFavorites} = useContext(FavoriteContext) 

    const quantityBtn = 'bg-coolblue px-3 py-1 text-white rounded-md text-lg'

     // to fetch the default data
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
            });
        }
  
        fetchData();
  
    }, [])


      
    /* Action when content is loading */
  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader
                color={'#000'}
                loading={isLoading}
                size={30}
            />
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

    //function when item is added to cart
  const cartFunction = () => {
    addToCart(data.title, data.price, data.image, quantity, data.price * quantity);
    setIsVisible(true)
  }
 
  if(quantity < 1) {
    setQuantity(1)
  }

  return (
    <section className='px-10 md:px-20 py-10 md:py-20'>
       {/*  div for the container of the header of the page */}
        <div className='flex flex-col md:flex-row gap-10'>
            {/* div for the image */}
            <article className='border p-10'>
                <img src={data.image} alt="" />
            </article>

            {/* div for the header content */}
            <article className='flex flex-col gap-3'>
                <h3 className='text-4xl font-bold'>
                    {data.title}
                </h3>
                <small>
                    Category: {data.category}
                </small>
                <p className='font-semibold text-xl'>
                    ${data.price}
                </p>
                
                {/* quantity increment or decrement */}
                <div className='flex items-center gap-3'>
                    <button
                      className={quantityBtn}
                      onClick={() => setQuantity(prev => prev - 1)}
                    >
                        -
                    </button>

                    <p>
                        {quantity}
                    </p>
                    
                    <button
                      className={quantityBtn}
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                        +
                    </button>
                </div>

                <div className='flex items-center gap-3'>
                    <button
                    onClick={cartFunction}
                    className='btn'
                    >
                        Add To Cart
                    </button>
                </div>
                

                <p className='text-justify text-lg leading-normal h-full'>
                    <span className='underline font-semibold'>
                        Description
                    </span>: {data.description}
                </p>
            </article>
        </div>

        <Recommend
         category={data.category} 
         />
      {isVisible ? <Notification product={data.title} /> : ''}
    </section>
  )
}

export default SingleProduct
