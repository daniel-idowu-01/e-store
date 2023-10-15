import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const CheckOut = () => {

  const { items } = useContext(CartContext);
  const inputStyle = 'w-full border outline-none px-4 py-2 rounded-md'

  return (
    <section className='flex flex-col md:flex-row md:justify-between py-8 px-10 md:px-20'>
      {/* billing details */}
      <article className='md:w-1/2 h-screen'>
        <h3 className='text-xl font-semibold mb-2'>Billing Details</h3>
        <form action="" className='flex flex-col gap-5'>
            <div className='flex gap-2'>
                <input 
                  className={inputStyle} 
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder='First Name'
                />
                <input 
                className={inputStyle} 
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder='Last Name'
                />
            </div>
            
            <div className='flex gap-2'>
                <input 
                className={inputStyle} 
                  type="email"
                  name="email"
                  id="email"
                  placeholder='Email'
                />
                <input 
                className={inputStyle} 
                  type="password"
                  name="password"
                  id="password"
                  placeholder='Phone Number'
                />
            </div>

            <select 
            className={inputStyle} name="country" id="country">
              <option disabled>Select Country</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
          </select>

          <input 
            className={inputStyle} 
            type="text"
            name="address"
            id="address"
            placeholder='Address'
          />

          <div className='flex gap-2'>
            <select 
            className={inputStyle} name="country" id="country">
              <option disabled>Select Country</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Nigeria">Nigeria</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
            </select>
            <input 
              className={inputStyle} 
              type="number"
              name="postcode"
              id="postcode"
              placeholder='Postcode / ZIP'
            />
          </div>
        </form>
      </article>

      {/* order summary */}
      <article className='flex flex-col gap-3'>
        <h3 className='text-xl font-semibold mb-2'>Order Summary</h3>
        <table className='border p-10 rounded-md'>
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
            </tr>
          </thead>
          <tbody className='text-center'>
            { items.length 
              ? 
            items.map((item) => (
              <tr className='tr'>
                <td className='p-2 text-sm w-64'>
                  {item.name}
                </td>
                <td className='p-2 text-sm'>
                  {item.quantity}
                </td>
                <td className='p-2 text-sm'>
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

        <button className=' bg-coolblue rounded-full text-white w-full py-2'>Place Order Now</button>
      </article>
    </section>
  )
}

export default CheckOut
