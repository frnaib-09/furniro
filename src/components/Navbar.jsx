import React from 'react'
import NavLogo from './NavLogo'
import NavMiddle from './NavMiddle'
import NavIcons from './NavIcons'

const Navbar = () => {
  
  
  return (
    <div className="grid grid-cols-12 items-center py-[30px]">
      <NavLogo />
      <NavMiddle />
      <NavIcons />
      
    </div>
  )
}

export default Navbar