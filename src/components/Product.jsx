import React from 'react'
import { IoShareSocialSharp } from "react-icons/io5";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";




const Product = ({image, tag, name, details, price, old_price}) => {
    return (
    <div class="productCard col-span-6 lg:col-span-3 md:col-span-4 px-4 relative">
        <div className="hoverEffect flex flex-col justify-center items-center absolute z-20 top-1/3 left-1/9 w-fit brightness-100">
            <button className='primary_btn py-3 px-13'>Add To Cart</button>
            <div className="flex mt-6 text-center justify-center gap-5">
                <p className='text-white font-semibold text-base leading-[150%] flex items-center'><IoShareSocialSharp className='mr-0.5 w-4 h-4'></IoShareSocialSharp>Share</p>
                <p className='text-white font-semibold text-base leading-[150%] flex items-center'><RiArrowLeftRightLine className='mr-0.5 w-4 h-4'></RiArrowLeftRightLine> Compare</p>
                <p className='text-white font-semibold text-base leading-[150%] flex items-center'><FaRegHeart className='mr-0.5 w-4 h-4'></FaRegHeart>Like</p>
            </div>
        </div>
        <div class="productImg">
            <img src={`${image}`} alt="" />
            <div className="corner">
                <p className={tag === "-50%" ? "bg-red-400" : tag === "New" ? "bg-[#2ec1ac]" : "hidden"}>{tag}</p>
            </div>
        </div>
        <div class="productData">
            <h1>{name}</h1>
            <p>{details}</p>
            <div class="price flex items-center gap-4">
                <h6>Rp {price}.00</h6>
                <del> {old_price}</del>
            </div>
        </div>
    </div>
  )
}

export default Product