import React from 'react';
import Slider from '../components/Slider'



const Inspiration = () => {
  return (
    <div className="container bg-[#fcf8f3] h-167.5 overflow-hidden relative">
      <div className="grid grid-cols-12 h-full">
        
        <div className="col-span-5 flex flex-col justify-center text-left bg-[#fcf8f3] z-10 relative">
          <h1 className="font-bold text-[40px] leading-[120%] text-[#3a3a3a] ml-25">
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p className="ml-25 mt-1.5 font-primary font-medium text-base leading-[150%] text-[#616161]">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <a className="ml-25 mt-6 primary_btn py-3 px-9 inline-flex w-fit bg-primary text-white font-semibold" href="#">
            Explore More
          </a>
        </div>

        <Slider />

      </div>
    </div>
  );
};

export default Inspiration;