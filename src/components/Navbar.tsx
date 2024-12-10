import Link from 'next/link'
import React from 'react'
import Menue from './Menue'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-34 relative'>
      {/* For mobile screen */}
      <div className='h-full  flex items-center md:hidden justify-between'>
        <Link href="/">
          <div className='text-2xl tracking-wide'>HASEEB</div>
        </Link>
        <Menue />
      </div>
      {/* For bigger Screen */}
      <div className='hidden md:flex items-center h-full justify-between  gap-8 ' >
        {/* Left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
        <Link href="/" className='flex items-center gap-3'>
          <img src="logo.png" alt='logo' width={24} height={24} />
          
            <div className='text-2xl tracking-wide'>HASEEB

            </div>
          </Link>
          <div className='hidden xl:flex gap-4'>
            <Link href= "/">Homepage</Link>
            <Link href= "/">Shop</Link>
            <Link href= "/">About</Link>
            <Link href= "/">Deals</Link>
            <Link href= "/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between  gap-8'>

        <SearchBar />
        <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
