import React from 'react'

const ProductList = ({product}) => {
    const {title, description, price}= product
  return (
    <div>
    <p className='text'>Buy Your Favourate Product</p>

    <div className='card'>
    <div className='card2'>
   <p className='h2'>{title}</p>
   <p className='price'>${price}</p>
    </div>
    <div className='card3'>
    <p>{description}</p>
    <button className='outline'>Add to Cart</button>
    </div>
    </div>
    </div>
  )
}

export default ProductList