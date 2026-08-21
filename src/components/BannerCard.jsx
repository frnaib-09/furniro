import React from 'react'

const BannerCard = () => {
  return (
    <div className="absolute bottom-20 right-40 card rounded-[10px] bg-bg max-w-[643px] w-full h-auto">
      <span className="font-primary font-[600] text-[16px] tracking-[0.19em] text-[#333] mb-[4px] block">
        New Arrival
      </span>
      <h1 className="mb-[14px] font-primary font-[700] text-[52px] leading-[125%] text-primary">
        Discover Our <br /> New Collection
      </h1>
      <p className="font-primary font-normal text-[18px] text-[#333] mb-[46px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <a
        className="py-[25px] px-[72px] bg-primary text-white font-primary font-primary font-[700] text-[16px] uppercase text-white"
        href="#">
        buy now
      </a>
    </div>
  );
}

export default BannerCard