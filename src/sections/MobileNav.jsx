import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";

const MobileNav = ({className=''}) => {
  return (
    <div className={`grid grid-cols-12 items-center py-7.5 ${className}`}>
      <HiMenuAlt2 />
      <NavLogo />
      <HiMenuAlt3 />

    </div>
  )
}

export default MobileNav