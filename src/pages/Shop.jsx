import React from 'react'
import Navbar from '../sections/Navbar'
import MobileNav from '../sections/MobileNav'
import PageHeader from '../components/PageHeader'

const Shop = () => {
  return (
    <div id='shop' className='w-full h-full'>
      <Navbar />
      <MobileNav />
      <PageHeader title="Shop" />

    </div>
  )
}

export default Shop