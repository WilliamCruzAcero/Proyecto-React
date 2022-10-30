import './App.css';
import NavBar from './componets/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componets/tienda/ItemListContainer';
import CartWidget from './componets/tienda/CartWidget';
import ItemDetail from './componets/tienda/ItemDetail';
import { CartContextProvider } from './componets/context/cartContext';
import 'boxicons' 




function App() {

  

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
          <Route path='/detail/:id' element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider> 
  );
} 

export default App; 

 