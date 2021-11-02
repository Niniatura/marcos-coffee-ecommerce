import './App.css';
import { ItemListContainer} from "./components/itemListContainer/ItemListContainer.js";
import { NavBar } from './components/navBar/NavBar.js';
//import {ItemCount,onAdd} from './components/itemCount/ItemCount';


function App() {
  
  return (
    <div className="App">
      <NavBar /> 
      <div className="Items">
        <ItemListContainer /> 
      </div>
    </div>
    
    );
    
}

export default App;
