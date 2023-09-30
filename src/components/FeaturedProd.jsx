import ProductComp from './ProductComp'
import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const FeaturedProd = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // API call
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setItems(json)
            setIsLoading(false)
        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
          });
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
            <p className='text-3xl p-5'>Error: {error.message}</p>
        </div>
        
    )
  }

  return (
    <section>
      {/* Featured Product */}
      <div className='py-40 md:py-20 flex justify-center'>
            <div className='text-center'>
                <p className='text-xs text-coolblue'>Featured Products</p>
                <p className='text-2xl font-bold'>Our Featured Collection</p>
                <div className='px-10 md:px-20 flex flex-col md:flex-row justify-center gap-20 md:gap-5 mt-5'>
                    { items.map((item, index) => {
                        return (
                            <ProductComp
                              key={index}
                              name={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating.rate}
                              count={item.rating.count}
                            />
                        )
                    })}
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default FeaturedProd
