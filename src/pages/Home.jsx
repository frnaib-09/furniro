import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:grid"></Navbar>
      <MobileNav className="grid lg:hidden"></MobileNav>
    </div>
  )
}

export default Home