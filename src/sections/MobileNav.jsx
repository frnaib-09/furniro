import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import NavLogo from "../components/NavLogo"
import NavMiddle from '../components/NavMiddle';
import MidItems from "../components/MidItems"




const MobileNav = ({children='', className=''}) => {
  return (
    <>
    <div className={`fixed h-screen bg-gray-700/60 w-full  ${className}`}>
      {/* <button className="text-2xl">
        <HiMenuAlt2 />
      </button> */}
      <NavMiddle className=' py-4  bg-white h-full max-w-75 '>
        {/* <MidItems className='bg-white h-full w-90 px-8'></MidItems> */}
      </NavMiddle>
     
    </div>
    <div className="flex lg:hidden justify-around py-4">
      <button className="text-2xl">
        <HiMenuAlt3 />
      </button>
       <NavLogo />
      <button className="text-2xl">
        <HiMenuAlt3 />
      </button>
     </div>
     </>
  )
}

export default MobileNav