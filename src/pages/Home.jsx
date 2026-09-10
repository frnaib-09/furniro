import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import Banner from '../sections/Banner'
import Range from '../sections/Range'
import Products from '../sections/Products'
import Inspiration from '../sections/Inspiration'
import ShareSetup from '../sections/ShareSetup'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div>
      <Navbar className="bg-white fixed top-0 left-0 hidden lg:grid max-w-full z-50"></Navbar>
      <MobileNav className="lg:hidden overflow-hidden fixed top-0 left-0 mx-auto max-w-full z-50"></MobileNav>
      <Banner className='lg:mt-20'></Banner>
      <Range />
      <Products />
      <Inspiration />
      <ShareSetup />
      <Footer />
    </div>
  )
}

export default Home