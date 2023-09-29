import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Notification from '../components/Notification'

const SingleProduct = () => {
    const { id } = useParams()

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  /* const [isVisible, setIsVisible] = useState(false); */

     // to fetch the default data
    useEffect(() => {
        const fetchData = async () => {
         await fetch(`https://fakestoreapi.com/products/${id}`)
          .then(res => res.json())
          .then(json => {
              setIsLoading(false);
              setData(json)
          })
          .catch(error => {
              setIsLoading(false);
              setError(error);
            });
        }
  
        fetchData();
  
    }, [])

    console.log(data)

      
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
    <div>
      SingleProduct
      {id}
      {/* {isVisible ? <Notification product={eachMovie.title} /> : ''} */}
    </div>
  )
}

export default SingleProduct
