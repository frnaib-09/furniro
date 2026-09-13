import React from 'react'
import FooterLeft from '../components/FooterLeft'
import FooterFMiddle from '../components/FooterFMiddle'
import FooterLMiddle from '../components/FooterLMiddle'
import FooterEnd from '../components/FooterEnd'

const Footer = () => {
  return (
    <>
      <hr className="border-gray-300" />
      <div className="grid grid-cols-1 gap-10 py-10 px-4 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1.5fr] lg:gap-8 lg:py-12 lg:px-16">
        <FooterLeft />
        <FooterFMiddle />
        <FooterLMiddle />
        <FooterEnd />
      </div>
      <hr className="border-gray-300" />
      <p className="font-primary font-normal text-sm text-black py-6 px-4 sm:text-base md:px-8 lg:px-16 lg:py-8">&copy; 2023 furino. All rights reserved.</p>
    </>
  )
}

export default Footer
