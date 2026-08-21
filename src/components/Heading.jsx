import React from 'react'

const Heading = ({title, data}) => {
  return (
    <div class="heading">
        <h1>{title}</h1>
        <p>{data}</p>
    </div>
  )
}

export default Heading