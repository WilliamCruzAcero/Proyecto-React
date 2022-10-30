import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemCard from './ItemCard'


const ItemListContainer = () => {

  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => { 
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    getDocs ( productsCollection ).then(resp => {
      const productsData = resp.docs.map( d => ({id: d.id, ...d.data()}))
      console.log(productsData);
      setProducts(productsData )
      setLoading(false)
    })

   }
  
  return (
    <div>
      <div className='m-10'>MI TIENDA</div>
      {loading ? <h1> Cargando...</h1>
      :products.map( p => <ItemCard key={p.id} {...p}/>)}
      
      
    </div>
  )
}

export default ItemListContainer






