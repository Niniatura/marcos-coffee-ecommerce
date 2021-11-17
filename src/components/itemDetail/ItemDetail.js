import { useState, useContext} from "react";
import {ItemCount} from "../itemCount/ItemCount.js";
import "./itemDetail.css";
import '../itemCount/ItemCount.css';
import { Link } from "react-router-dom";
import {CartProvider, CartContext} from "../contexts/cartContext/cartContext.js";

export function ItemDetail(props) {
  const addItem = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const [visible, setVisible] = useState(true);
  
  
  const onAdd=(counter)=>{
    console.log('se agrego un producto'+counter)
    setVisible(false);
    
  }

  
  
   
  return (
    <>
      <CartContext.Provider value ={{addItem}}>
        <h5 className="cardTitle">{props.title}</h5>
      <div className="detail">
        <img src={props.picture} className="brand-logo" alt="logo" />
        <div className="card-body">
          <p className="card-text">{props.description}</p>  
          {visible ? <ItemCount className="counter" setCounter={setCounter} counter={counter} stock={props.stock} setVisible={setVisible} onAdd={onAdd} onClick={() => addItem()}/> : <Link to={`/itemCart`} className="addButton btn bg-dark btn-primary">Ir al carrito de compras!</Link>}
        </div>
    </div>
    </CartContext.Provider>
    </>
  );
};


export default ItemDetail;