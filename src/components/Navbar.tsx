import Link from 'next/link'
import React from 'react'
import Menue from './Menue'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-34'>
     {/* For mobile screen */}
     <Link href="/">
     Haseeb
     </Link>
     <Menue/>
    </div>
  )
}

export default Navbar
