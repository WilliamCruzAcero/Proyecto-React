import logo from './logo.svg';
import './App.css';
import NavBar from './componets/navBar';
import ItemListContainer from './componets/greeting/ItenListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Hola React'/>
    </>
    
  );
}

export default App; 

 