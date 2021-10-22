import React, { useState } from "react";
import './ItemCount.css';
//import {ItemList,onAdd} from '../itemListContainer/ItemListContainer.js';


export const ItemCount = ({ stock, initial,  onAdd }) => {
    
    const [counter,setCounter] = useState(0);
    
    const onDecrese = () => {
        if (stock <= counter) { 
          setCounter(counter - 1)
        }
      }

      const onIncrement = () => {
        if (stock > counter) {
          setCounter(counter + 1)
        }
      }

    return (
        <div className="contador">
            <button className="btn bg-dark boton" onClick ={onDecrese}>-</button>
            <p className="items">{counter}</p>
            <button className="btn bg-dark boton" onClick ={onIncrement}>+</button>        
        
        </div>
    )
}
export default ItemCount;