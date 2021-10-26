import React, { useState } from "react";
import './ItemCount.css';
//import {ItemList,onAdd} from '../itemListContainer/ItemListContainer.js';


export const ItemCount = ({ stock, initial }) => {
    
    const [counter,setCounter] = useState(0);
    const count = {ItemCount}.initial;
    const onDecrese = () => {
        if (counter > 1) { 
          setCounter(counter - 1)
        }
      }

      const onIncrement = () => {
        if (counter < stock) {
          setCounter(counter + 1)
        }
      }

      const onAdd = () => {
        console.log('cantidad agregada '+ counter)
    }

    return (
        <div className="contador">
            <button className="btn bg-dark boton" onClick ={onDecrese}>-</button>
            <p className="items">{counter}</p>
            <button className="btn bg-dark boton" onClick ={onIncrement}>+</button>        
            <button onClick ={onAdd}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;