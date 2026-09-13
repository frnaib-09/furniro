import React from 'react'

const FooterEnd = () => {
 return (
    <div>
      <h4 className='mb-5 font-primary font-medium text-base text-[#9f9f9f] lg:mb-10'>Newsletter</h4>
      <form className="flex w-full max-w-sm flex-wrap items-end gap-x-3 gap-y-4">
        <input type="email" placeholder='Enter Your Email Address' aria-label="Email address" className='min-w-0 flex-1 border-b-2 border-gray-300 py-1 text-sm focus:border-black focus:outline-none sm:text-base' />
       <button type="submit" className="relative shrink-0 uppercase font-primary font-medium text-sm text-black after:content-[''] after:absolute after:left-0 after:-bottom-0.75 after:h-0.5 after:w-full after:bg-black hover:after:w-full hover:after:bg-primary after:transition-all after:duration-300">Subscribe</button>
      </form>
    </div>
 )
}

export default FooterEnd
