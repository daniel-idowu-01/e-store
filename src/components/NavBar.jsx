import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { BsHandbag } from 'react-icons/bs'
import CartContext from '../context/CartContext'
import { VscChromeClose } from "react-icons/vsc"
import React, { useState, useContext } from 'react'
import FavoriteContext from '../context/FavoriteContext'
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai'

const NavBar = () => {

  const [sideBar, setShowSideBar] = useState(false)
  const sideBarLinkStyle ='hover:text-coolblue text-lg'
  const iconStyle = 'text-xl cursor-pointer hover:text-coolblue'
  const navLinkStyle ='hidden md:block hover:text-coolblue text-lg'
  const mobileIconStyle = 'hover:text-coolblue text-2xl cursor-pointer'
  const sidebarStyle = `${sideBar ? 'flex' : 'hidden'} md:hidden flex-col gap-10 text-center w-full shadow-md pt-5 pb-10 px-10`

  const showSideBar = () => {
    setShowSideBar(!sideBar)
  }

  const {items} = useContext(CartContext);

  // links data
  const links = [
    {
      'link': '',
      'linkTitie': 'Home'
    },
    {
      'link': 'shop',
      'linkTitie': 'Shop'
    },
    {
      'link': 'about',
      'linkTitie': 'About'
    },
    {
      'link': 'contact',
      'linkTitie': 'Contact'
    }
  ]

  return (
    <nav className='sticky top-0 z-10 bg-white shadow-sm'>
      <div className='flex justify-between py-8 px-10 md:px-20'>
          <Link to='/'>
            <p className='font-[900] text-xl'>
              <span className='text-coolblue'>
                shop
              </span>bliss
            </p>
          </Link>

        <div className='flex justify-between gap-14 relative left-14'>
          {
            links.map((link, index) => (
              <Link 
               key={index}
               to={`/${link.link}`} 
               className={navLinkStyle}
               >
                {link.linkTitie}
              </Link>
            ))
          }
        </div>

        <div className='flex justify-between gap-7'>
          <AiOutlineSearch
           className={`${iconStyle} hidden md:block`} 
           />

          <AiOutlineUser
           className={`${iconStyle} hidden md:block`} 
           />

          <Link to='/cart' className='hidden md:flex'>
            <BsHandbag className={iconStyle} />
            <span>{items.length}</span>
          </Link>

          { sideBar ?
            <VscChromeClose 
            className='text-2xl md:hidden cursor-pointer' 
            onClick={showSideBar} 
            />
            :
            <FaBars
             className='text-2xl md:hidden cursor-pointer' 
             onClick={showSideBar} 
             />
          }
        </div>
      </div>

      {/* SideBar For Mobile */}
      <div className={sidebarStyle}>
          {
            links.map((link, index) => (
              <Link 
               key={index}
               to={`/${link.link}`}
               className={sideBarLinkStyle}
               onClick={() => setShowSideBar(false)}
               >
                {link.linkTitie}
              </Link>
            ))
          }

        <div className='flex justify-evenly'>
          <AiOutlineSearch
           className={mobileIconStyle} 
           />

          <AiOutlineUser
           className={mobileIconStyle} 
           />

          <Link
           to='/cart' 
           className='flex' 
           onClick={() => setShowSideBar(false)}>
            <BsHandbag className={mobileIconStyle} />
            <span>{items.length}</span>
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
