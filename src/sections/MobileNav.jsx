import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLogo from "../components/NavLogo"
import { IoMdClose } from "react-icons/io"
import NavMiddle from '../components/NavMiddle';
import NavIcons from '../components/NavIcons'

const MobileNav = ({className}) => {

  const [open, setOpen] = useState(false);


  return (
    <>
      <div onClick={()=> setOpen(false)} className={`fixed ${!open ? 'invisible opacity-0' : 'visible opacity-100'} transition-all duration-300 h-full bg-gray-700/60 w-full m-auto ${className}`}>
        <NavMiddle onClick={() => setOpen(false)} className={`relative ${!open ? '-translate-x-full' : 'translate-x-0'} py-10 transition-all duration-400 bg-white h-full max-w-90`}></NavMiddle>
        <button onClick={() => setOpen(false)}><IoMdClose className={`absolute bg-white top-1/2 right-20 rounded-full text-black text-4xl p-2 ${!open ? 'translate-x-100' : 'translate-x-0'} duration-400`}></IoMdClose></button>
      </div>
      <div className="flex lg:hidden justify-around py-4 overflow-x-hidden">
        <NavLogo className='text-left'></NavLogo>
        <button onClick={() => setOpen(true)} className="text-2xl">
          <HiMenuAlt3 />
        </button>
        
      </div>
    </>
  )
}

export default MobileNav