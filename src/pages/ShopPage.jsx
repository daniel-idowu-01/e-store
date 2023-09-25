import React from 'react'
import '../index.css'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductComp from '../components/ProductComp'

const ShopPage = () => {

  const [items, setItems] = useState([])
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('electronics');
  const [showDefault, setShowDefault] = useState(true)

  // animation 
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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setItems(json)
        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
          });
    }, [])

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setCategoryItems(json)
        })
        .catch(error => {
          setIsLoading(false);
          setError(error);
        });
    }, [category])
    

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

   /* To change the category value in the API */
   const handleCategoryChange = event => {
    setShowDefault(false)
    setCategory(event.target.value);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}>

      {/* To filter items */}
      <div className='flex justify-start mx-10 md:mx-20'>
        <select value={category} onChange={handleCategoryChange} className='border px-5 py-2'>
          <option value='electronics' disabled>Select Category</option>
          <option value='electronics'>Electronics</option>
          <option value='jewelery'>Jewelery</option>
          <option value="men's%20clothing">Men's Clothing</option>
          <option value="women's%20clothing">Women's Clothing</option>
        </select>
      </div>
      

    {/* To show items */}
      { showDefault ? <div
       className='grid md:grid-cols-4 text-center place-items-center mt-5 mx-10 overflow-x-hidden'>
        { items.map((item) => {
            return (
                <ProductComp
                  key={item.id}
                  name={item.title}
                    image={item.image}
                    price={item.price}
                      rating={item.rating.rate}
                      count={item.rating.count}
                />
            )
        })}
     </div>
      :
      <div
        className='grid md:grid-cols-4 text-center place-items-center mt-5 mx-10 overflow-x-hidden'>
        { categoryItems.map((item) => {
            return (
                <ProductComp
                  key={item.id}
                  name={item.title}
                    image={item.image}
                    price={item.price}
                      rating={item.rating.rate}
                      count={item.rating.count}
                />
            )
        })}
      </div> 
    }


     
    </motion.div>
  )
}

export default ShopPage
