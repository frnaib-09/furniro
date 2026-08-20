import React from 'react'
import MidItems from './MidItems'
import NavIcons from './NavIcons'

const NavMiddle = ({ children='', className = '' }) => {
  return (
    <div className={`grid col-span-4 justify-center ${className}`}>
      <MidItems className={`${children}`}></MidItems>
      <NavIcons classname='lg:hidden'></NavIcons>
    </div>
  )
}

export default NavMiddle
