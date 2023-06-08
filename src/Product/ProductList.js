import React from 'react'
import { cartActions } from '../store/CartSlice'
import { useDispatch } from 'react-redux'
const ProductList = ({product}) => {
    const {title, description, price, id}= product
  const dispatch= useDispatch()
  const addToCartHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
    }
  return (
    <div>
    <div className='card'>
    <div className='card2'>
   <p className='h2'>{title}</p>
   <p className='price'>${price}</p>
    </div>
    <div className='card3'>
    <p>{description}</p>
    <button className='outline' onClick={addToCartHandler}>Add to Cart</button>
    </div>
    </div>
    </div>
  )
}

export default ProductList