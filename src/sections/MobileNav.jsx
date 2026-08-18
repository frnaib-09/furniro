import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLogo from "../components/NavLogo"
import NavMiddle from '../components/NavMiddle';
import MidItems from "../components/MidItems"




const MobileNav = ({children='', className=''}) => {
  return (
    <div className={`relative flex justify-between items-center py-7.5 px-5 ${className}`}>
      <button className="text-2xl">
        <HiMenuAlt2 />
      </button>
      <NavMiddle className='absolute py-4 bg-gray-700/60 h-full w-full inset-0'>
        <MidItems className='bg-white h-full w-90 px-8'></MidItems>
      </NavMiddle>
      <NavLogo />
      <button className="text-2xl">
        <HiMenuAlt3 />
      </button>
    </div>
  )
}

export default MobileNav