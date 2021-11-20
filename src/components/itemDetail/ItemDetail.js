import { useState, useContext} from "react";
import {ItemCount} from "../itemCount/ItemCount.js";
import "./itemDetail.css";
import '../itemCount/ItemCount.css';
import { CartContext, CartProvider, useCart } from "../contexts/cartContext/cartContext.js";
import data from "../productJson/ProductJSON";
import { Link } from "react-router-dom";

export const ItemDetail = (product) =>{
 
  const cart = useCart();
  
  const [counter, setCounter] = useState(1);
  

  const onAddHandler=(item, counter) =>{
    
    
    console.log("se agrego un producto"+ item + "cantidad:" + counter)
    
    cart.addItem(item,counter)
  }
  return (
    <>
      <CartProvider>
        <h5 className="cardTitle">{product.title}</h5>
      <div className="detail">
        <img src={product.picture} className="brand-logo" alt="logo" />
        <div className="card-body">
          <p className="card-text">{product.description}</p>  
        <ItemCount className="counter" setCounter={setCounter} counter={counter} stock={product.stock} onAddHandler={onAddHandler(product, counter)}/> 
        <Link to={`/itemCart`} className="addButton btn bg-dark btn-primary">Ir al carrito de compras!</Link> 
          
        </div>
    </div>
    </CartProvider>
    </>
  );
};


export default ItemDetail;

