import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const PageHeader = ({ title }) => {
  return (
    <div className='bg-[url("/images/pages-bg.png")] bg-cover bg-center bg-no-repeat min-h-79 flex flex-col justify-center items-center gap-4'>
        <img src="/images/favicon.png" alt="" className="" />
        <h1 className='font-primary font-medium text-5xl text-black'>{title}</h1>
        <p className='flex items-center gap-3 font-primary font-light text-base text-black mt-0.5'><span className='flex items-center gap-3 font-medium'>Home <MdKeyboardArrowRight /> </span>{title}</p>
    </div>
  )
}

export default PageHeader