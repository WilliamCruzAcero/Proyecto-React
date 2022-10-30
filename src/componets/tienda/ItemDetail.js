import { collection, doc, getDoc,  getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import Count from './Count'

const ItemDetail = () => {
 
    const { id } = useParams()
     
    const [product, setProduct] = useState([])
    const { addToCart } = useCart()

    useEffect(() => {
      getProduct()
    })
    
    

    const getProduct = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'producto')
        const docRef = doc(productsCollection, id)
        getDoc( docRef ).then( resp => {
           console.log(resp.data);
            setProduct(resp.data());
        })
    }
    
    const addHandler = () => { 
      addToCart(product)
       

    }
      
    
    
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <img src={product.image} height={200}/>
        <Count/> 

        <button onClick={ addHandler } className="btn m-5">Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail