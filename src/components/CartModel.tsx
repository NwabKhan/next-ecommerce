"use client"

import Image from "next/image";

const CartModel = () => {

  // const cartItems = false;
  const cartItems = true;

  return (
    <>   
    
     <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
    
         {
          !cartItems ?  <div className="">
        Cart is Empty
      </div>   
       : <>
       <h2 className="text-xl">Shopping Cart</h2>
       <div className="flex flex-col gap-8">    

       {/* ITEMS     */}

          {/* ITEM 1 */}
         <div className="flex gap-4">
          
          {/* <Image src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt="" width={72} height={96} className="object-cover rounded-md"/>  */}
          <Image src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt=""  width={72} height={96} className="object-cover rounded-md"/> 
          <div className="flex flex-col justify-between w-full">
            {/* TOP SECTION */}
            <div className="">
              {/* TITLE  */}
              <div className=" flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-100 rounded-sm">$550</div>
              </div>
              {/* DESC  */}
              <div className="text-sm text-gray-500"> Available</div>
            </div>
            {/* BOTTOM SECTION */}
            <div className="flex justify-between text-sm">
              <span className=" text-gray-500">Qty. 2</span>
              <span className=" text-blue-500">Remove</span>
            </div>
          </div>
        </div>  

          {/* ITEM 2 */}
         <div className="flex gap-4">
          
          {/* <img src="https://images.pexels.com/photos/29276466/pexels-photo-29276466/free-photo-of-starry-night-over-snowy-norwegian-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt="" width={72} height={96} className="object-cover rounded-md"/>  */}
          <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="" width={72} height={96} className="object-cover rounded-md"/> 
          <div className="flex flex-col justify-between w-full">
            {/* TOP SECTION */}
            <div className="">
              {/* TITLE  */}
              <div className=" flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-100 rounded-sm">$550</div>
              </div>
              {/* DESC  */}
              <div className="text-sm text-gray-500"> Available</div>
            </div>
            {/* BOTTOM SECTION */}
            <div className="flex justify-between text-sm">
              <span className=" text-gray-500">Qty. 2</span>
              <span className=" text-blue-500">Remove</span>
            </div>
          </div>
        </div>  
        </div>
         {/* Bottom */}
        <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>SubTotal</span>
              <span>1100$</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">
            Shipping and texes calcuated at chekout
            </p>
            <div className=" flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300"> View Cart</button>
              <button className="rounded-md py-3 px-4 bg-black text-white"> Check Out</button>
            </div>
        </div>
        </>
        }
      
   
    </div>
   

    
    </>
   

  )
}

export default CartModel
