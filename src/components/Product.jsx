import React from 'react'

const Product = ({image, tag, name, details, price, old_price}) => {
    return (
    <div class="productCard col-span-6 lg:col-span-3 md:col-span-4 px-4">
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