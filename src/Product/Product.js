import React from 'react'
import ProductList from './ProductList'
const Product = () => {
    const products=[
        {
            title: 'Product 1',
            description: 'This is a good Product',
            price: 6.00
        }
    ]
  return (
    <div className='product'>
    {products.map((product) => (
        <ProductList product={product} />
    ))}
    </div>
  )
}

export default Product