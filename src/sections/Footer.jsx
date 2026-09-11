import React from 'react'
import FooterLeft from '../components/FooterLeft'
import FooterFMiddle from '../components/FooterFMiddle'
import FooterLMiddle from '../components/FooterLMiddle'
import FooterEnd from '../components/FooterEnd'

const Footer = () => {
  return (
    <>
      <hr className="border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8 lg:px-16">
        <FooterLeft />
        <FooterFMiddle />
        <FooterLMiddle />
        <FooterEnd />
      </div>
      <hr className="border-gray-300" />
      <p className="font-primary font-normal text-base text-[#000] py-8 px-4 md:px-8 lg:px-16">&copy; 2023 furino. All rights reserved.</p>
    </>
  )
}

export default Footer