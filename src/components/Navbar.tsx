import Link from 'next/link'
import React from 'react'
import Menue from './Menue'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-34'>
     {/* For mobile screen */}
     <div className='h-full  flex items-center justify-between'>
     <Link href="/">
     <div className='text-2xl tracking-wide'>Haseeb</div>
     
     </Link>
     <Menue/>
     </div>
    </div>
  )
}

export default Navbar
