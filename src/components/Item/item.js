import {useState} from 'react';
import logo from '../images/brand_logo.jpeg';
import "../Item/item.css";
import ItemCount from "../itemCount/ItemCount.js";
import "../itemCount/ItemCount.css"

export const Item =() =>{
    const [counter,setCounter] = useState(1);
    return(
        <>
        <div className="card">
            <img src={logo} className="brand-logo" alt="logo" />
            <div className="card-body">
                <h5>Card title</h5>
                <p className="card-text">Decaffeinated single origin ut trifecta iced.</p>
                <ItemCount setCounter={setCounter} counter={counter} stock="5"/>
            </div>
        </div>
        </>
    )
}
export default Item;