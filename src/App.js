/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './componets/navBar';
import Clicker from './componets/Clicker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componets/tienda/ItemListContainer';
import ItemDetailContainer from './componets/tienda/ItemDetailContainer';



function App() {

  

  return (
    <> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      
      </BrowserRouter>
      
      <Clicker/>
        
      
        
    
    </>
);
} 

export default App; 

 