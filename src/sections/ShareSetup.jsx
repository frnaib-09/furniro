import React from 'react'

const ShareSetup = () => {
  return (
    <section className="share-setup overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="mb-8 text-center md:mb-12">
        <p className="mb-2 text-base font-medium text-[#616161] md:text-xl">
          Share your setup with
        </p>

        <h2 className="text-2xl font-bold text-[#3A3A3A] md:text-3xl lg:text-[40px]">
          #FuniroFurniture
        </h2>
      </div>
      
      <div className="share-setup__grid" aria-label="Funiro furniture customer setups">
          <div className="share-setup__tile share-setup__tile--1">
            <img src="/images/Rectangle 36.png" alt="Modern furniture setup" />
          </div>
          <div className="share-setup__tile share-setup__tile--2">
            <img src="/images/Rectangle 37.png" alt="Furniture detail" />
          </div>
          <div className="share-setup__tile share-setup__tile--4">
            <img src="/images/Rectangle 39.png" alt="Living room furniture" />
          </div>
          <div className="share-setup__tile share-setup__tile--5">
            <img src="/images/Rectangle 40.png" alt="Dining room furniture" />
          </div>
          <div className="share-setup__tile share-setup__tile--7">
            <img src="/images/Rectangle 41.png" alt="Home interior" />
          </div>
          <div className="share-setup__tile share-setup__tile--8">
            <img src="/images/Rectangle 43.png" alt="Styled furniture setup" />
          </div>
          <div className="share-setup__tile share-setup__tile--9">
            <img src="/images/Rectangle 44.png" alt="Contemporary interior" />
          </div>
          <div className="share-setup__tile share-setup__tile--10">
            <img src="/images/Rectangle 45.png" alt="Furniture arrangement" />
          </div>
        </div>
    </section>
  )
}

export default ShareSetup
