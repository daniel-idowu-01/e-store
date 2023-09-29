import { Link } from 'react-router-dom'
import { ProductComp } from '../components'
import React, { useState, useEffect } from 'react'

const Recommend = ({ category }) => {

    const [categoryItems, setCategoryItems] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // to fetch the data based on category
        const fetchCategoryProducts = async () => {
            setIsLoading(true);

            await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(json => {
                setCategoryItems(json)
                setIsLoading(false);
            })
            .catch(error => {
              setIsLoading(false);
              setError(error);
            });
          }
    
          fetchCategoryProducts();
    }, [])

         
    /* Action when content is loading */
  if (isLoading) {
    return (
        <div className='flex justify-center items-center'>
            <p className='text-3xl'>Loading...</p>
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

  return (
        <div className='relative top-10'>
            <p className='text-lg font-semibold'>You can also check out:</p>
            <div className='grid grid-cols-5 place-items-center'>
                {categoryItems.map((item) => (
                    <Link
                        key={item.id}
                        target='_blank'
                        to={`/shop/${item.id}`}>
                        <ProductComp
                            name={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating.rate}
                            count={item.rating.count}
                        />
                    </Link>
                ))}
            </div>

        </div>
  )
}

export default Recommend
