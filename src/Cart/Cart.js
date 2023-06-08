import React from 'react'
import CartList from './CartList'
import { useSelector } from 'react-redux';

const Cart = () => {
 const CartItems= useSelector(state=> state.cart.items)
  return (
    <div className='bg'>
        <p className='shopping'>Your Shopping Cart</p>
        <ul>
        {CartItems.map((item)=> (
          <CartList key={item.id} item={{title: item.title, quantity: item.quantity, price: item.price, total: item.totalPrice , id: item.id }}  />
        ))}
            
        </ul>
    </div>
  )
}

export default Cart