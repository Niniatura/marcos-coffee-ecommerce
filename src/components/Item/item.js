import logo from '../images/brand_logo.jpeg';
import "../Item/item.css";
import "../itemCount/ItemCount.css"
import {ItemCount} from "../itemCount/ItemCount.js";

export const Item =() =>{
    return(
        <div className="card">
            <img src={logo} className="brand-logo" alt="logo" />
            <div className="card-body">
                <h5>Card title</h5>
                <p className="card-text">Decaffeinated single origin ut trifecta iced.</p>
                <ItemCount />
            </div>
        </div>
    )
}
export default Item;