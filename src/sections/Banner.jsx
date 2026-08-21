import React from 'react'
import BannerCard from '../components/BannerCard'


const Banner = () => {
  return (
    <div className="w-full h-auto bg-[url('/images/bannerBG.png')] bg-cover bg-center flex items-center justify-center">
      <BannerCard />
    </div>
  )
}

export default Banner