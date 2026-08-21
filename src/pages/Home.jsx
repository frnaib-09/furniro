import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import Banner from '../sections/Banner'
import Range from '../sections/Range'
import Products from '../sections/Products'

const Home = () => {
  return (
    <div>
      <Navbar className="bg-white fixed top-0 left-0 hidden lg:grid max-w-full z-50"></Navbar>
      <MobileNav className="lg:hidden overflow-hidden"></MobileNav>
      <Banner className='lg:mt-20'></Banner>
      <Range />
      <Products />
    </div>
  )
}

export default Home