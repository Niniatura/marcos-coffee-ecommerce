import {useState, React} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Item/item.css";

export function Item (props){
    const [counter,setCounter] = useState(0);
    return(
        <>
        <div className="card">
            <h5>{props.title}</h5>
            <img src={props.picture} className="brand-logo" alt="logo" />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <Link to={`/item/${props.id}`} >Detalle</Link>
                <p className="card-text">Stock:{props.stock}</p>   
            </div>
        </div>
        </>
    )
}
export default Item;