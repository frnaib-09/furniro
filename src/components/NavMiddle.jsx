import React from 'react'

const NavMiddle = () => {
    const navItems = [
        {"title": "Home", 
          "url": "#"},
        {"title": "Shop", 
          "url": "#"},
        {"title": "About", 
          "url": "#"},
        {"title": "Contact", 
          "url": "#"},
      ]
  return (
        <div className="grid col-span-4 justify-center">
        <ul className='navCenter'>
          {navItems.map((item, index) => (
            <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary duration-300 ease-in-out" key={index}><a href={item.url}>{item.title}</a></li>
          ))}
        </ul>
      </div>
  )
}

export default NavMiddle