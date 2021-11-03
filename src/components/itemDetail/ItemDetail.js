import { useState } from "react";
import {ItemCount} from "../itemCount/ItemCount.js";


export function ItemDetail(props) {
    const [counter, setCounter] = useState(1);
    const onAdd = () => {
        console.log('cantidad agregada '+ counter)
    }
  return (
    <>
    <div className="card">
        <h5>{props.title}</h5>
        <img src={props.picture} className="brand-logo" alt="logo" />
        <div className="card-body">
            <p className="card-text">{props.description}</p>  
        </div>
        <ItemCount setCounter={setCounter} counter={counter} stock={props.stock}/>
    </div>
    </>
  );
};


export default ItemDetail;