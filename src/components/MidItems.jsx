import React from 'react'

const MidItems = ({className=''}) => {
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
    <ul className={`navCenter ${className}`}>
          {navItems.map((item, index) => (
            <li className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary origin-center duration-300 ease-in-out my-3 lg:my-0" key={index}><a href={item.url}>{item.title}</a></li>
          ))}
        </ul>
  )
}

export default MidItems