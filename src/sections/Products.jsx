import React from 'react'
import Heading from '../components/Heading'
import Product from '../components/Product'

const Products = () => {
  return (
    <div className='my-14'>
        <div class="container">
            <Heading title='Our Products' data=''></Heading>
            <div class="productCards grid grid-cols-12 gap-8 mb-8 min-h-111.5">
                <Product
                    image="/images/syltherine.png"
                    tag="-50%"
                    name="Syltherine"
                    details="Stylish cafe chair"
                    price="2,500"
                    old_price="Rp 3,500.00"
                ></Product>
                <Product
                    image="/images/leviosa.png"
                    name="Leviosa"
                    details="Stylish cafe chair"
                    price="2,500"
                    old_price=""
                ></Product>
                <Product
                    image="/images/lolito.png"
                    tag="-50%"
                    name="Lolito"
                    details="Luxary big sofa"
                    price="7,000"
                    old_price="Rp 14,000.00"
                ></Product>
                <Product
                    image="/images/respira.png"
                    tag="New"
                    name="Respira"
                    details="Outdoor bar table and stool"
                    price="500,000"
                    old_price=""
                ></Product>
                <Product
                    image="/images/grifo.png"
                    name="Grifo"
                    details="Night Lamp"
                    price="1,500"
                    old_price=""
                ></Product>
                <Product
                    image="/images/muggo.png"
                    tag="New"
                    name="Muggo"
                    details="Luxury sofa"
                    price="500,000"
                    old_price=""
                ></Product>
                <Product
                    image="/images/pingky.png"
                    tag="-50%"
                    name="Pingky"
                    details="Cute sofa set"
                    price="700,000"
                    old_price="Rp 1,400,000"
                ></Product>
                <Product
                    image="/images/potty.png"
                    tag="New"
                    name="Potty"
                    details="Minimalist duel sofa set"
                    price="500,000"
                    old_price=""
                ></Product>
            </div>
            <a className='primary_btn px-18.5 py-3 mx-auto w-fit block' href="#">Show More</a>
        </div>
    </div>
  )
}

export default Products