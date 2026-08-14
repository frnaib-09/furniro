import React from 'react'
import NavLogo from '../components/NavLogo'
import NavMiddle from '../components/NavMiddle'
import NavIcons from '../components/NavIcons'

const Navbar = () => {
  return (
    <div className="relative flex items-center py-7.5">

      <NavLogo />

      <NavMiddle />

      <NavIcons />

    </div>
  )
}

export default Navbar