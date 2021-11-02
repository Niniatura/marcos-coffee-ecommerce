import {useState} from 'react';
import "../Item/item.css";
import ItemCount from "../itemCount/ItemCount.js";

export const Item =(props) =>{
    const [counter,setCounter] = useState(1);
    return(
        <>
        <div className="card">
            <img src={props.picture} className="brand-logo" alt="logo" />
            <div className="card-body">
                <h5>{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <ItemCount setCounter={setCounter} counter={counter} stock={props.stock}/>
            </div>
        </div>
        </>
    )
}
export default Item;