import React from 'react'

const FooterLMiddle = () => {
  const helpItems = [
    {"title": "Payment Options", 
      "url": "#"},
    {"title": "Rerurns", 
      "url": "#"},
    {"title": "Privacy Policies", 
      "url": "#"},
  ]
  return (
    <div>
      <h4 className='mb-5 font-primary font-medium text-base text-[#9f9f9f] lg:mb-10'>Help</h4>
      <ul className='flex flex-col gap-4 justify-left lg:gap-8'>
        {helpItems.map((item, index) => (
          <li key={index} className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary origin-center duration-300 ease-in-out">
            <a href={item.url} className="font-primary font-medium text-base text-black hover:text-primary transition-all duration-300 ease-in-out">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLMiddle
