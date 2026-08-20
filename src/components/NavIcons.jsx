import React from 'react'
import { LuUsers } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const NavIcons = () => {
    const icons = [ LuUsers, FiSearch, FaRegHeart, IoCartOutline ]
  return (
        <div className="grid col-span-4">
        <ul className='flex items-center justify-center gap-11'>
          {icons.map((Icon, index) => (
            <li key={index}><a href="#"><Icon className="w-7 h-7 hover:text-primary duration-300 ease-in"></Icon></a></li>
          ))}
        </ul>
      </div>
  )
}

export default NavIcons