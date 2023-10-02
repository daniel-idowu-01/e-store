import React from 'react'
import { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'
import { motion, useAnimation } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {

    const { items, setItems } =  useContext(CartContext);

    const tableHead = 'bg-gray-300 p-3 font-semibold text-left'
  
    // function to delete item
    const deleteItem = (id) => {
      setItems(items.filter(item => item.id !== id))
  }
  
  // function to calculate the total price
  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

  

   return (
    <motion.div
      className='overflow-x-hidden mx-2 md:mx-10 mt-10'>

      <table className='w-full border-collapse table-auto'>
        <thead>
          <tr>
            <th className={tableHead}>
              ID
            </th>
            <th className={tableHead}>

            </th>
            <th className={tableHead}>
              Product
            </th>
            <th className={tableHead}>
              Quantity
            </th>
            <th className={tableHead}>
              Price
            </th>
            <th className={tableHead}>
              
            </th>
          </tr>
        </thead>
        <tbody>
          { items.length 
            ? 
          items.map((item , key) => (
            <tr className='tr'>
              <td className='p-2'>
                {key}
              </td>
              <td className='p-2'>
                <img className='w-20' src={item.image} alt='' />
              </td>
              <td className='p-2'>
                {item.name}
              </td>
              <td className='p-2'>
                {item.quantity}
              </td>
              <td className='p-2'>
                ${item.totalPrice}
              </td>
              <td
               className='hover:cursor-pointer'
               onClick={() => deleteItem(item.id)}
               >
                <FaTrashAlt />
              </td>
            </tr>
            )
          )
            : 
          <p>No items in cart</p> 
          }  
        </tbody>
      </table>




      <section className='w-full md:w-1/4 md:float-rightn flex flex-col gap-2 border border-gray-500 p-3 mt-5'>
        <p className='text-xl flex justify-between'>
          <span className='text-semibold'>Subtotal: </span>
          ${totalPrice}
        </p>
        <p className='text-xl flex justify-between'>
          <span className='text-semibold'>Shipping: </span>
          ${ totalPrice === 0 ? 0 : 8}
        </p>
        <p className='text-xl flex justify-between'>
        <span className='text-semibold'>Total: </span> 
          ${ totalPrice === 0 ? totalPrice : totalPrice + 8}
        </p>

        <button className=' bg-coolblue w-full px-6 py-3 text-white'>Checkout</button>
      </section>
      
    </motion.div>
  )
}

export default Cart
