import '../index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GrPowerReset } from 'react-icons/gr'
import ProductComp from '../components/ProductComp'
import { motion, useAnimation } from 'framer-motion';

const ShopPage = () => {

  const [items, setItems] = useState([])
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('electronics');
  const [showDefault, setShowDefault] = useState(true)

  const container = 'grid md:grid-cols-5 text-center place-items-center overflow-x-hidden'

    // to fetch the default data
    useEffect(() => {
      const fetchProducts = async () => {
        setIsLoading(true);

        await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setItems(json)
            setIsLoading(false);
        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
          });
      }

      fetchProducts();

    }, [])

    // to fetch the data based on categories selected
    useEffect(() => {
      const fetchCategoryProducts = async () => {
        setIsLoading(true);

        fetch(`https://fakestoreapi.com/products/category/${category}`)
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
    <motion.div className='px-10 md:px-20 py-10'>

      {/* To filter items */}
      <div className='flex items-center gap-2 justify-start'>

        <select
         value={category} 
         onChange={handleCategoryChange} 
         className='hover:cursor-pointer outline-none border px-5 py-2'
         >
          <option
           value='' disabled>
            Select Category
          </option>

          <option
           value='electronics'>
            Electronics
          </option>

          <option
           value='jewelery'>
            Jewelery
          </option>

          <option
           value="men's%20clothing">
            Men's Clothing
          </option>

          <option
           value="women's%20clothing">
            Women's Clothing
          </option>
        </select>

        <GrPowerReset
         className='cursor-pointer text-lg'
         onClick={() => setShowDefault(true)} 
         />

      </div>
      

      {/* To show items */}
      { showDefault ? <div
       className={container}>
        { items.map((item) => {
            return (
              <Link to={`/shop/${item.id}`}>
                <ProductComp
                    key={item.id}
                    name={item.title}
                      image={item.image}
                      price={item.price}
                        rating={item.rating.rate}
                        count={item.rating.count}
                  />
              </Link>
                
            )
        })}
     </div>
      :
      <div
        className={container}>
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
