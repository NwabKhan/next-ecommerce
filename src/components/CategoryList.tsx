"use client"
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ImageMinus } from 'lucide-react'


const categories = [
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/14883422/pexels-photo-14883422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "All Products"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Accessories"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/575435/pexels-photo-575435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title : "Bags"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "Books"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "Featured"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "Home"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "Jeans"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "Shoes"

    },
    {
        Link : "/list?cat=test",
        img : "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600",
        title : "T-Shirts"

    },
]

const CategoryList = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4  md:gap-8'>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent >

                        {
                       categories.map((category)=>{
                        return(
                            <Link href={category.Link} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                             <div className='relative bg-slate-100 w-full h-96'>
                                 <Image src={category.img} fill alt='' sizes='20vw' className='object-cover' />
                             </div>
                             <h1 className='mt-8 font-light text-cl tracking-wide'>  {category.title}</h1>
                             </Link>
                        )
                       })
                        }

                       
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

        </div>
    )
}

export default CategoryList




