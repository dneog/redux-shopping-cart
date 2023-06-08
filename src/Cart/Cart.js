import React from 'react'
import CartList from './CartList'

const Cart = () => {
  return (
    <div className='bg'>
        <p className='shopping'>Your Shopping Cart</p>
        <ul>
            <CartList item={{title:'Product 1', quantity:3, price:6, total: 18 }}  />
        </ul>
    </div>
  )
}

export default Cart