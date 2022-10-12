import { useState } from "react"

const Clicker = () => {

    const [counter, setCounter ] = useState(0)
    
    

    const clickHandler = ()=>{
      setCounter( counter + 1) 
    }
    return(
        <div>
            <div className="m-5">{counter}</div>
            <button onClick={ clickHandler } className="btn m-5">CLick Aqui</button>
        </div>
    )
} 
export default Clicker;
