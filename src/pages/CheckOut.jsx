import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const CheckOut = () => {

  const { items } =  useContext(CartContext);

  return (
    <section className='flex flex-col md:flex-row md:justify-between py-8 px-10 md:px-20'>
      {/* billing details */}
      <article className='md:w-1/2 h-screen'>
        <h3 className='text-xl font-semibold mb-2'>Billing Details</h3>
        <form action="" className='flex flex-col gap-5'>
            <div className='flex gap-2'>
                <input className='w-full border outline-none px-4 py-2 rounded-md' type="text" name="first_name" id="first_name" placeholder='First Name' />
                <input className='w-full border outline-none px-4 py-2 rounded-md' type="text" name="last_name" id="last_name" placeholder='Last Name' />
            </div>
            
            <div className='flex gap-2'>
                <input className='w-full border outline-none px-4 py-2 rounded-md' type="email" name="email" id="email" placeholder='Email' />
                <input className='w-full border outline-none px-4 py-2 rounded-md' type="password" name="password" id="password" placeholder='Phone Number' />
            </div>

            <select className='w-full border outline-none px-4 py-2 rounded-md' name="country" id="country">
              <option disabled>Select Country</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
          </select>

          <input className='w-full border outline-none px-4 py-2 rounded-md' type="text" name="address" id="address" placeholder='Address' />

          <div className='flex gap-2'>
            <select className='w-full border outline-none px-4 py-2 rounded-md' name="country" id="country">
              <option disabled>Select Country</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
            </select>
            <input className='w-full border outline-none px-4 py-2 rounded-md' type="number" name="postcode" id="postcode" placeholder='Postcode / ZIP' />
          </div>
        </form>
      </article>

      {/* order summary */}
      <article>
        <h3 className='text-xl font-semibold mb-2'>Order Summary</h3>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th>
              Product
            </th>
            <th>
              Quantity
            </th>
            <th>
              Price
            </th>
            <th>
              
            </th>
          </tr>
        </thead>
        <tbody>
          { items.length 
            ? 
          items.map((item) => (
            <tr className='tr'>
              <td className='p-2'>
                {item.name}
              </td>
              <td className='p-2'>
                {item.quantity}
              </td>
              <td className='p-2'>
                ${item.totalPrice}
              </td>
            </tr>
            )
          )
            : 
          <p>No items in cart</p> 
          }  
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default CheckOut
