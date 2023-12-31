import { Link } from 'react-router-dom'
import { ProductComp } from '../components'
import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

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

  return (
        <div className='relative top-10'>
            <p className='text-lg font-semibold mb-5'>You can also check out:</p>
            <div className='grid md:grid-cols-5 place-items-start gap-5'>
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
