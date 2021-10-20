import './App.css';
import React, { useState } from "react";
import { ItemListContainer } from './components/itemList/ItemList.js';
import { NavBar } from './components/navBar/NavBar.js';
import {Counter} from './components/itemCount/ItemCount';


function App() {
  const [stock, setCounter] = useState (1);
  const onAdd = () => {
    if (stock < 5) {
      setCounter(stock + 1)
    }
  }
  
  const onDecrease = () => {
    if (stock >= 2) { 
      setCounter(stock - 1)
    }
  }
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer /> 
      <Counter counter={stock} onAdd= {onAdd} onDecrease= {onDecrease} /> 
    </div>
    
    );
    
}

export default App;
