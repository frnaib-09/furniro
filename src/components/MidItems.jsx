import React from 'react'
import { NavLink } from 'react-router-dom'

const MidItems = ({ className = '', isFooter = false }) => {
  const navItems = [
        {"title": "Home", 
          "url": "/"},
        {"title": "Shop", 
          "url": "/shop"},
        {"title": "Blog", 
          "url": "/blog"},
        {"title": "Contact", 
          "url": "/contact"},
      ]
  return (
    <ul className={`${isFooter ? '' : 'navCenter'} ${className}`}>
          {navItems.map((item, index) => (
            <li className="relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary origin-center duration-300 ease-in-out" key={index}>
              <NavLink to={item.url} className={({ isActive }) => `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${isActive ? 'after:w-full text-primary after:origin-center duration-300 ease-in-out' : ''}`}>{item.title}
              </NavLink>
            </li>
          ))}
        </ul>
  )
}

export default MidItems
