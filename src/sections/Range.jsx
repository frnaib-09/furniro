import React from 'react'
import Heading from '../components/Heading'

const Range = () => {
  return (
    <div>
        <div class="container">
            <Heading title='Browse The Range' data='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'></Heading>
            <div class="imgCards grid grid-cols-12 gap-5 px-4">
                <div class="imgCard grid col-span-6 lg:col-span-4">
                    <img src="/images/dining.png" alt="" />
                    <p>Dining</p>
                </div>
                <div class="imgCard grid col-span-6 lg:col-span-4">
                    <img src="/images/living.png" alt="" />
                    <p>Living</p>
                </div>
                <div class="imgCard grid col-span-6 lg:col-span-4">
                    <img src="/images/bedroom.png" alt="" />
                    <p>Bedroom</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Range