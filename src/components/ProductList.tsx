import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div  className="relative w-full h-80">
       <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <img src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
       </div>
       <div className="flex justify-between">
       <span className="font-medium">Product Name</span>
       <span className="font-semibold">$49</span>
       </div>
       <div className="text-sm text-gray-500">My Description</div>
       <button className="rounded-2xl ring-1 ring-Haseeb text-Haseeb py-2 px-4 w-max text-xs hover:bg-Haseeb hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div  className="relative w-full h-80">
       <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <img src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
       </div>
       <div className="flex justify-between">
       <span className="font-medium">Product Name</span>
       <span className="font-semibold">$49</span>
       </div>
       <div className="text-sm text-gray-500">My Description</div>
       <button className="rounded-2xl ring-1 ring-Haseeb text-Haseeb py-2 px-4 w-max text-xs hover:bg-Haseeb hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div  className="relative w-full h-80">
       <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <img src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
       </div>
       <div className="flex justify-between">
       <span className="font-medium">Product Name</span>
       <span className="font-semibold">$49</span>
       </div>
       <div className="text-sm text-gray-500">My Description</div>
       <button className="rounded-2xl ring-1 ring-Haseeb text-Haseeb py-2 px-4 w-max text-xs hover:bg-Haseeb hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div  className="relative w-full h-80">
       <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <img src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
       </div>
       <div className="flex justify-between">
       <span className="font-medium">Product Name</span>
       <span className="font-semibold">$49</span>
       </div>
       <div className="text-sm text-gray-500">My Description</div>
       <button className="rounded-2xl ring-1 ring-Haseeb text-Haseeb py-2 px-4 w-max text-xs hover:bg-Haseeb hover:text-white">Add to Cart</button>
      </Link>
    </div> 
  )
}

export default ProductList
