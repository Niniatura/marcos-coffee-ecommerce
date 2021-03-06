import './App.css';
import React from 'react';
import { ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer.js";
import { ItemListContainer} from "./components/itemListContainer/ItemListContainer.js";
import { NavBar } from './components/navBar/NavBar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemCart from './components/itemCart/ItemCart.js';
import { CartProvider } from './contexts/cartContext/cartContext';


function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
    
    <div className="App">
      <NavBar /> 
    </div>
    
      <Switch>          

        <Route exact path="/">            
          <ItemListContainer />
        </Route>

        <Route exact path="/item/:id">            
          <ItemDetailContainer/>
        </Route>

        <Route exact path="/itemCart">            
          <ItemCart/>
        </Route>
      
     </Switch>
     
  
    </BrowserRouter>
    </CartProvider>
    );
}

export default App;