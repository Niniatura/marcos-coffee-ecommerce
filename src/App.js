import './App.css';
import { ItemList} from './components/itemListContainer/ItemListContainer.js';
import { NavBar } from './components/navBar/NavBar.js';
//import {ItemCount,onAdd} from './components/itemCount/ItemCount';


function App() {
  
  return (
    <div className="App">
      <NavBar /> 
      <ItemList /> 
      
    </div>
    
    );
    
}

export default App;
