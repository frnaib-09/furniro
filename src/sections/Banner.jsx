import React from 'react'
import BannerCard from '../components/BannerCard'


const Banner = ({className}) => {
  return (
    <div className={`w-full h-screen bg-[url('/images/bannerBG.png')] bg-cover bg-center flex items-center justify-end pe-14.5 pt-13 ${className}`}>
      <BannerCard />
    </div>
  )
}

export default Banner