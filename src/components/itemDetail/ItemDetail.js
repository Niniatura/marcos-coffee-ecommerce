import { useState } from "react";
import {ItemCount} from "../itemCount/ItemCount.js";
import "./itemDetail.css";
import '../itemCount/ItemCount.css';


export function ItemDetail(props) {
    const [counter, setCounter] = useState(1);
  return (
    <>
    <div className="cardDetail">
        <h5>{props.title}</h5>
        <img src={props.picture} className="brand-logo" alt="logo" />
        <div className="card-body">
            <p className="card-text">{props.description}</p>  
        </div>
        <div className="cont">
            <ItemCount className="counter" setCounter={setCounter} counter={counter} stock={props.stock}/>
        </div>
    </div>
    </>
  );
};


export default ItemDetail;