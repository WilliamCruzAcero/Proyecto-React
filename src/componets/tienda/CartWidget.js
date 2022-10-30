import React from 'react'
import { useCart } from '../context/cartContext'

const CartWidget = () => {

  const {products, clearCart} = useCart()
  
   
 
  return (
    <div>
      <h2>Carrito</h2>
      { products.map( ( p, i) => <li key={i}>{p.name}: {p.price} </li> )  }
      {/*  <h3>TOTAL: 0</h3> */}
      <button onClick={ clearCart } className="btn m-5">Limpiar carrito</button>
      <button className='btn m-5' >Pagar</button>
         
    </div> 
  ) 
}

export default CartWidget




