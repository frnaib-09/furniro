import Slider from '../components/Slider';

const Inspiration = () => {
  return (
    <div className="container relative h-auto overflow-hidden bg-[#fcf8f3] lg:h-167.5">
      <div className="grid h-full grid-cols-12">
        <div className="relative z-10 col-span-12 flex flex-col justify-center bg-[#fcf8f3] py-10 text-left lg:col-span-5 lg:py-0">
          <h1 className="ml-8 text-[32px] leading-[120%] font-bold text-[#3a3a3a] sm:text-[40px] lg:ml-25">
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p className="ml-8 mt-1.5 max-w-[420px] font-primary text-base leading-[150%] font-medium text-[#616161] lg:ml-25 lg:max-w-none">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <a className="primary_btn ml-8 mt-6 inline-flex w-fit px-9 py-3 font-semibold lg:ml-25" href="#">
            Explore More
          </a>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Inspiration;
