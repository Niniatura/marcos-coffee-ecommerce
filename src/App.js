import './App.css';
import { ItemListContainer } from './components/itemList/ItemList.js';
import { NavBar } from './components/navBar/NavBar.js'


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer text ='Hola mundo' />
    </div>
    
  );
}

export default App;
