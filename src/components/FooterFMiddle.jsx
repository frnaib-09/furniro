import React from 'react'
import MidItems from './MidItems'

const FooterFMiddle = () => {
  return (
    <div>
      <h4 className='mb-5 font-primary font-medium text-base text-[#9f9f9f] lg:mb-10'>Links</h4>
      <MidItems isFooter className='flex flex-col items-start justify-start gap-4 lg:gap-8 font-primary font-medium text-base text-black' />
    </div>
  )
}

export default FooterFMiddle
