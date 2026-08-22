import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { RiArrowRightSLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  {
    id: 1,
    title: 'Inner Peace',
    subtitle: '01 — Bed Room',
    image: '/images/insp 1.png',
  },
  {
    id: 2,
    title: 'Modern Living',
    subtitle: '02 — Living Room',
    image: '/images/insp 2.png',
  },
  {
    id: 3,
    title: 'Minimal Kitchen',
    subtitle: '03 — Kitchen',
    image: '/images/bedroom.png',
  },
  {
    id: 4,
    title: 'Cozy Workspace',
    subtitle: '04 — Home Office',
    image: '/images/bannerBG.png',
  },
];
const Slider = () => {
  return (
    <div className="col-span-7 flex flex-col justify-center ml-10.5 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.8}
            loop={true}
            navigation={{
              nextEl: '.custom-next-btn',
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination-dots',
            }}
            className="w-full overflow-visible!"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="group relative">
                <div className="w-full h-120 group-[.swiper-slide-active]:h-145 transition-all duration-300 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={slide.image}
                    alt={slide.title}
                  />

                  <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-md p-6 flex items-end gap-3 opacity-0 group-[.swiper-slide-active]:opacity-100 transition-opacity duration-300">
                    <div>
                      <span className="text-sm text-[#616161] font-medium">{slide.subtitle}</span>
                      <h3 className="text-2xl font-bold text-[#3A3A3A]">{slide.title}</h3>
                    </div>
                    <button className="bg-primary text-white p-3 hover:bg-[#a17b27]">
                    <FaArrowRight />
                    </button>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next-btn absolute right-12 top-1/2 -translate-y-1/2 z-20 bg-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">
            <RiArrowRightSLine className='w-6 h-6'></RiArrowRightSLine>
          </button>

          <div className="custom-pagination-dots absolute bottom-27! right-37! z-20 flex gap-3 items-center"></div>
        </div>
  )
}

export default Slider