import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  { id: 1, title: 'Inner Peace', subtitle: '01 — Bed Room', image: '/images/insp 1.png' },
  { id: 2, title: 'Modern Living', subtitle: '02 — Living Room', image: '/images/insp 2.png' },
  { id: 3, title: 'Minimal Kitchen', subtitle: '03 — Kitchen', image: '/images/bedroom.png' },
  { id: 4, title: 'Cozy Workspace', subtitle: '04 — Home Office', image: '/images/bannerBG.png' },
];

const Slider = () => {
  return (
    <div className="relative col-span-12 ml-0 flex flex-col justify-center px-6 pb-16 sm:px-8 lg:col-span-7 lg:ml-10.5 lg:px-0 lg:pb-0">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.8}
        loop={true}
        navigation={{ nextEl: '.custom-next-btn' }}
        pagination={{ clickable: true, el: '.custom-pagination-dots' }}
        breakpoints={{
          0: { slidesPerView: 1.08, spaceBetween: 16 },
          480: { slidesPerView: 1.25, spaceBetween: 20 },
          640: { slidesPerView: 1.45, spaceBetween: 24 },
          1024: { slidesPerView: 1.8, spaceBetween: 24 },
        }}
        className="w-full overflow-visible!"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="group relative">
            <div className="relative h-90 w-full overflow-hidden transition-all duration-300 sm:h-107.5 lg:h-120 lg:group-[.swiper-slide-active]:h-145">
              <img className="h-full w-full object-cover" src={slide.image} alt={slide.title} />
              <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-end gap-2 bg-white/70 p-4 opacity-0 backdrop-blur-md transition-opacity duration-300 group-[.swiper-slide-active]:opacity-100 sm:bottom-6 sm:left-6 sm:gap-3 sm:p-6">
                <div>
                  <span className="text-xs font-medium text-[#616161] sm:text-sm">{slide.subtitle}</span>
                  <h3 className="text-xl font-bold text-[#3A3A3A] sm:text-2xl lg:text-2xl">{slide.title}</h3>
                </div>
                <button className="shrink-0 bg-primary p-3 text-white hover:bg-[#a17b27]" aria-label={`View ${slide.title}`}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-next-btn absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white sm:right-6 sm:h-12 sm:w-12 lg:right-12 lg:h-12 lg:w-12" aria-label="Next inspiration">
        <RiArrowRightSLine className="h-6 w-6" />
      </button>
      <div className="custom-pagination-dots absolute bottom-[-38px]! left-1/2 z-20 flex w-auto! -translate-x-1/2 items-center gap-3 sm:bottom-[-42px]! lg:bottom-27! lg:right-38! lg:left-auto! lg:translate-x-0"></div>
    </div>
  );
};

export default Slider;
