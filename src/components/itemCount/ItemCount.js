import './ItemCount.css';
import { CartContext, CartProvider, useCart } from "../contexts/cartContext/cartContext.js";
import data from "../productJson/ProductJSON";
import { Link } from "react-router-dom";

export const ItemCount = ({ setCounter, counter, stock, onAdd}) => {
  const cart = useCart();
  
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
      
     
     
    
    return (
        <>
        <div >
          <div className="contador"> 
              <button className="btn btn-outline-dark" onClick ={onDecrese}>-</button>
              <p className="items">{counter}</p>
              <button className="btn btn-outline-dark" onClick ={onIncrement}>+</button>
                    
          </div>
          <div>
              <button className="addButton btn bg-dark btn-primary" onAdd={onAdd}><span className="add">Agregar al carrito</span></button>
          </div>
         
        </div>
       </>
    )
}
export default ItemCount;