"use client"

import LoginPage from "@/app/login/page"
import { Flamenco } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModel from "./CartModel"

const NavIcons = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()
// temporary
const isLoggedIn = false;

  const handleProfile=()=>{
if(!LoginPage){
  router.push("/login")
}
setIsProfileOpen((prev)=>!prev)
  }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <img
      src="profile.png" 
      alt="" 
      width={22} 
      height={22} 
      className="cursor-pointer"
      onClick={handleProfile}
      />
  {
    isProfileOpen && (
      <>
      <div className="absolute p-4 rounded-md top-12 left-0 text-small shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
      <Link href="/">Profile</Link>
      <div className="mt-2 cursor-pointer">Logout</div>
      </div>
      </>
    )
  }
      <img 
      src="notification.png" 
      alt="" 
      width={22} 
      height={22} 
      className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
      <img 
      src="cart.png" 
      alt="" 
      width={22} 
      height={22} 
      
      onClick={()=>setIsCartOpen((prev=>!prev))}
      />
     
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-Haseeb rounded-full text-white text-sm flex  justify-center items-center">2</div>
      </div>
      { isCartOpen && ( <CartModel/>   ) }
      
    </div>
  )
}

export default NavIcons