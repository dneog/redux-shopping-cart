import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/CartSlice';
const CartList = ({item}) => {
  const dispatch= useDispatch();
  const {id, total, price, quantity, title}= item
  const removeItemHandler=(id)=> {
    dispatch(cartActions.removeItemFromCart(id))
  }
  const addItemHandler=()=> {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
     
    }))
  }
  return (
    <div className='cards'>
        <div className='cards2'>
        <p>{title}</p>
        <p className='item'>${total} (${price} / item)</p>
        </div>
        <div className='cards3'>
        <p className='quan'>x {quantity}
        </p>
        <div className='butns'>
        <button className='add' onClick={() => removeItemHandler(id)}>-</button>
        <button className='del' onClick={addItemHandler}>+</button>
        </div>
        
        </div>
       
    </div>
  )
}

export default CartList