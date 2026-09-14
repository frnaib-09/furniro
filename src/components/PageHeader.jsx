import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const PageHeader = ({ title }) => {
  return (
    <div>
        <img src="/images/pages bg.png" alt="" className="w-full h-full object-cover" />
        <h1>{title}</h1>
        <p>Home <MdKeyboardArrowRight /> {title}</p>
    </div>
  )
}

export default PageHeader