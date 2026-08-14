import React from 'react'
import NavLogo from '../components/NavLogo'
import NavMiddle from '../components/NavMiddle'
import NavIcons from '../components/NavIcons'

const Navbar = ({className=''}) => {
  
  return (
      <div className={`grid grid-cols-12 items-center py-7.5 ${className}`}>
        <NavLogo />
        <NavMiddle />
        <NavIcons />
      </div>
  )
}

export default Navbar