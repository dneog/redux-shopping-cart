import React from 'react'
import AddToCart from '../Cart/AddToCart'

const Header = () => {
  return (
    <div className='header'>
        <p>Redux Cart</p>
        <AddToCart />
    </div>
  )
}

export default Header