import React from 'react'

const ShareSetup = () => {
  return (
    <div>
        <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="mb-8 text-center md:mb-12">
        <p className="mb-2 text-base font-medium text-[#616161] md:text-xl">
          Share your setup with
        </p>

        <h2 className="text-2xl font-bold text-[#3A3A3A] md:text-3xl lg:text-[40px]">
          #FuniroFurniture
        </h2>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-[1440px] px-3 md:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-[180px_180px_180px] md:gap-4 lg:grid-cols-9 lg:grid-rows-[160px_160px_160px]">
          
          {/* Image 1 */}
          <div className="overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Furniture setup"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden md:col-span-1 md:row-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Furniture setup"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 3 - Center */}
          <div className="overflow-hidden md:col-span-2 md:row-span-3">
            <img
              src="/images/Rectangle 36.png"
              alt="Dining room"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Bedroom"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Kitchen"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden md:col-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Chair"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 7 */}
          <div className="overflow-hidden md:col-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Interior"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 8 */}
          <div className="overflow-hidden md:col-span-2">
            <img
              src="/images/Rectangle 36.png"
              alt="Furniture"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Image 9 */}
          <div className="overflow-hidden md:col-span-1">
            <img
              src="/images/Rectangle 36.png"
              alt="Home interior"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default ShareSetup