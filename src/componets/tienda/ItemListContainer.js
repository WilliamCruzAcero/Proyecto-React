import React, { useEffect, useState } from 'react'
import { productos } from './data/productos'
import ItemCard from './ItemCard'




const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getProductos().then( response => {
            console.log(response);
            setItems(response)
        }
            
        )
    }, [])

    const getProductos = () => {
        return new Promise( resolve => {
          setTimeout(() => {
            resolve( productos  )
          }, 3000);  
        })

    }
         
  return (
    <>
        <div>MI TIENDA</div>
        {items.map( items => <ItemCard key={items.id} {...items}/> )}
    </>
    
  )
}

export default ItemListContainer