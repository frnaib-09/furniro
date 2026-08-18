import React from 'react'
import MidItems from './MidItems'

const NavMiddle = ({ children='', className = '' }) => {
  return (
    <div className={`grid col-span-4 justify-center ${className}`}>
      <MidItems className={`${children}`}></MidItems>
    </div>
  )
}

export default NavMiddle
