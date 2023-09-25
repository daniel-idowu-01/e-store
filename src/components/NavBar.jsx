import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { FaBars } from "react-icons/fa"
import { VscChromeClose } from "react-icons/vsc"
import { Link } from 'react-router-dom'
import CartContext from '../CartContext'
import FavoriteContext from '../FavoriteContext'
import { useContext } from 'react'

const NavBar = () => {

  const [sideBar, setShowSideBar] = useState(false)

  const showSideBar = () => {
    setShowSideBar(!sideBar)
  }

  const {items} = useContext(CartContext);
  const {favorites} = useContext(FavoriteContext);

  return (
    <nav className='sticky top-0 z-10 bg-white shadow-sm'>
      <div className='flex justify-between py-7 px-10 md:px-20'>
        <div className=''>
          <Link to='/' className=' font-bold'><span className='text-coolblue italic text-lg'>E</span>-STORE</Link>
        </div>

        <div className='flex justify-between gap-10 relative left-14'>
          <Link className='hidden md:block hover:text-coolblue' to='/'>Home</Link>
          <Link className='hidden md:block hover:text-coolblue' to='/shop'>Shop</Link>
          <Link className='hidden md:block hover:text-coolblue' to='/about'>About</Link>
          <Link className='hidden md:block hover:text-coolblue' to='/contact'>Contact</Link>
        </div>

        <div className='flex justify-between gap-7 '>
          <AiOutlineSearch className='text-xl hidden md:block cursor-pointer hover:text-coolblue' />
          <Link to='/favorites' className='hidden md:flex'>
            <AiOutlineHeart className='text-xl cursor-pointer hover:text-coolblue' />
            <span>{favorites.length}</span>
          </Link>
          <AiOutlineUser className='text-xl hidden md:block cursor-pointer hover:text-coolblue' />
          <Link to='/cart' className='hidden md:flex'>
            <BsHandbag className='text-xl cursor-pointer hover:text-coolblue' />
            <span>{items.length}</span>
          </Link>

          { sideBar ?
            <VscChromeClose className='text-xl md:hidden cursor-pointer' onClick={showSideBar} />
            :
            <FaBars className='text-xl md:hidden cursor-pointer' onClick={showSideBar} />
          }
        </div>
      </div>

      {/* SideBar For Mobile */}
      <div className={` ${sideBar ? 'flex' : 'hidden'} md:hidden flex-col gap-10 text-center w-full shadow-md pt-5 pb-10 px-10 ` }>
        <Link className='hover:text-coolblue' to='/' onClick={() => setShowSideBar(false)}>Home</Link>
        <Link className='hover:text-coolblue' to='/shop' onClick={() => setShowSideBar(false)}>Shop</Link>
        <Link className='hover:text-coolblue' to='/about' onClick={() => setShowSideBar(false)}>About</Link>
        <Link className='hover:text-coolblue' to='/contact' onClick={() => setShowSideBar(false)}>Contact</Link>
        <div className='flex justify-evenly'>
          <AiOutlineSearch className='hover:text-coolblue text-xl cursor-pointer' />
          <AiOutlineHeart className='' />
          <Link to='/favorites' className='flex' onClick={() => setShowSideBar(false)}>
            <AiOutlineHeart className='hover:text-coolblue text-xl cursor-pointer' />
            <span>{favorites.length}</span>
          </Link>
          <AiOutlineUser className='hover:text-coolblue text-xl cursor-pointer' />
          <Link to='/cart' className='flex' onClick={() => setShowSideBar(false)}>
            <BsHandbag className='hover:text-coolblue text-xl cursor-pointer' />
            <span>{items.length}</span>
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
