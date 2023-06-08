import React from 'react'
import { useSelector } from 'react-redux'
import uiSlice, { uiActions } from '../store/UiSlice'
import {useDispatch} from 'react-redux'
const AddToCart = () => {
 const CartQuantity= useSelector(state => state.cart.totalQuantity)
  const dispatch= useDispatch()
  const toggleCartHandler=()=> {
    dispatch(uiActions.toggle())
  }
  return (
    <div>
        <button className='my' onClick={toggleCartHandler}>My Cart <span>{CartQuantity}</span></button>

    </div>
  )
}

export default AddToCart