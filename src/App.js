import './App.css';
import { ItemListContainer } from './components/itemList/ItemListContainer';
import { NavBar } from './components/navBar/navBar.js'


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer text ='Hola mundo' />
    </div>
    
  );
}

export default App;
