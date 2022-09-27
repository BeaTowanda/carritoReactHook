import React from 'react'

const CartItem = ({data,delFromCart}) => {
 
   let { id, name, price, quantity } = data;
  return (
    <div>
        <h3 className='contCarrito'>ELEMENTO </h3>
        <p>ID:{data.id}</p>
        <p>PRODUCTO:  {data.name}</p>
        <p>PRECIO ${price * quantity}.00</p>
        <p>CANTIDAD : {data.quantity}</p>
        <button onClick={()=>(delFromCart(id,true))}>Eliminar TODO el item</button>
        <button className='botonUno' onClick={()=>(delFromCart(id,false))}>Eliminar Item</button>
    </div>
  )
}

export default CartItem