import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from './data/productos'

const ItemDetailContainer = () => {

  const {id: itemId} = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    getProductos().then( resp => { 
      setItem( resp )
   
  })
  }, [])

  const getProductos = () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find( p => p.id === parseInt(itemId))  )
        
      }, 3000 );
    }) 
    
    
    
  }
  
  
  return (
    
    
      <div className='m-8'>
        <div>{item.name}</div>
        <img src={item.image}/>
        <div>precio: $ {item.price} * kilo</div>
      </div>
    
    
  )
}

export default ItemDetailContainer