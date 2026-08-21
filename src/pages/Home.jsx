import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import Banner from '../sections/Banner'

const Home = () => {
  return (
    <div>
      <Navbar className="hidden lg:grid"></Navbar>
      <MobileNav className="lg:hidden overflow-hidden"></MobileNav>
      {/* <Banner /> */}
      <div className="container">
        hellow
      </div>
    </div>
  )
}

export default Home