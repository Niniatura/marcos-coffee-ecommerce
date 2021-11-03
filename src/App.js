import './App.css';
import React from 'react';
import { ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer.js";
import { ItemDetail} from "./components/itemDetail/ItemDetail.js";
import { ItemListContainer} from "./components/itemListContainer/ItemListContainer.js";
import { NavBar } from './components/navBar/NavBar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import {ItemCount,onAdd} from './components/itemCount/ItemCount';


function App() {
  
  return (
    <BrowserRouter>
    
    <div className="App">
      <NavBar /> 
    </div>
    
      <Switch>          

        <Route exact path="/">            
          <ItemListContainer />
        </Route>

        <Route exact path="/item/:id">            
          <ItemDetail/>
        </Route>
      
     </Switch>
     
  
    </BrowserRouter>
   
    );
}

export default App;
