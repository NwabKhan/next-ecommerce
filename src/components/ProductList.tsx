import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div  className="relative w-full h-80">
       <Image src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <Image src="https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
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
       <Image src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <Image src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
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
       <Image src="https://images.pexels.com/photos/5184957/pexels-photo-5184957.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <Image src="https://images.pexels.com/photos/5554666/pexels-photo-5554666.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
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
       <Image src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt=""  sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 "/> 
       <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="" sizes="25vw"className="absolute object-cover rounded-md"/> 
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
