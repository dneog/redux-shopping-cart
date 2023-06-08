import React from 'react'
import ProductList from './ProductList'
const Product = () => {
    const products=[
        {
          id: 1,
            title: 'Product 1',
            description: 'This is a good Product',
            price: 6.00,
        },
        {
          id: 2,
            title: 'Product 2',
            description: 'This is a good Product',
            price: 8.00,
        }
    ]
  return (
    <>
      <p className='text'>Buy Your Favourate Product</p>
    
    <div className='product'>
    {products.map((product) => (
        <ProductList key={product.id} product={product} />
    ))}
    </div>
    </>
  )
}

export default Product