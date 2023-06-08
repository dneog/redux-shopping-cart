import React from 'react'
import uiSlice, { uiActions } from '../store/UiSlice'
import {useDispatch} from 'react-redux'
const AddToCart = () => {
  const dispatch= useDispatch()
  const toggleCartHandler=()=> {
    dispatch(uiActions.toggle())
  }
  return (
    <div>
        <button className='my' onClick={toggleCartHandler}>My Cart <span>1</span></button>

    </div>
  )
}

export default AddToCart