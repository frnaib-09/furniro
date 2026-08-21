import React from 'react'

const BannerCard = () => {
  return (
    <div className="bottom-20 right-0 lg:right-40 card rounded-[10px] bg-bg max-w-100 lg:max-w-160.75 w-full h-auto">
      <span className="font-primary font-semibold lg:text-[16px] text-[12px] tracking-[0.19em] text-dark mb-1 block">
        New Arrival
      </span>
      <h1 className="mb-3.5 font-primary font-bold lg:text-[52px] text-[36px] leading-[125%] text-primary">
        Discover Our <br /> New Collection
      </h1>
      <p className="font-primary font-normal lg:text-[18px] text-[12px] text-dark mb-11.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <a
        className="py-3.25 px-12 lg:py-6.25 lg:px-18 inline-block primary_btn" href="#">buy now</a>
    </div>
  );
}

export default BannerCard