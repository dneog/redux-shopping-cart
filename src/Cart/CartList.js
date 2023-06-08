import React from 'react'

const CartList = ({item}) => {
  return (
    <div className='cards'>
        <div className='cards2'>
        <p>{item.title}</p>
        <p className='item'>${item.total} (${item.price} / item)</p>
        </div>
        <div className='cards3'>
        <p className='quan'>x {item.quantity}
        </p>
        <div className='butns'>
        <button className='add'>-</button>
        <button className='del'>+</button>
        </div>
        
        </div>
       
    </div>
  )
}

export default CartList