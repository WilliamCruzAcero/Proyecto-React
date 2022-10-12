import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({id, name, image}) => {

    const styles = {
       
        width: '600px',
        height: 'auto',
        margin: '10px',
        textAlign: 'left',
        border: 'solid 2px black',
        color: 'yellow',
        textAlign: 'center',
        fontSize: '50px',
        
       
        
    }

    const stylesImg = {
        width: '100%',
        height: 'auto', 
    }

  return (
    <Link to={`/item/${id}`}>
     <div style={styles} className='m-5'>
        <img style={stylesImg} src={image}/>
        <div>{name}</div>
    </div>
    </Link>
   
  )
}

export default ItemCard 