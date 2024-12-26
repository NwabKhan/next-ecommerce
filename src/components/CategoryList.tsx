import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/14883422/pexels-photo-14883422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> All Products</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Accessories</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/575435/pexels-photo-575435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Bags</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Books</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'>Featured</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600'fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Home</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Jeans</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600'fill alt=''  sizes='20vhttps://www.pexels.com/photo/text-on-board-in-booth-14883422/
                // w' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> Shoes</h1>
            </Link>
            <Link href= "/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className='relative bg-slate-100 w-full h-96'>
                <Image src='https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600' fill alt=''  sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-cl tracking-wide'> T-Shirts</h1>
            </Link>

        </div>
  
    </div>
  )
}

export default CategoryList
