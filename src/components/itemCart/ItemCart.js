import { useContext} from "react";
import { CartContext, useCart } from "../../contexts/cartContext/cartContext.js";
import data from "../productJson/ProductJSON.js";

function ItemCart () {
    
    const {cart} = useContext(CartContext);
    return(
        <>
       
       {cart.length > 0 && (
          <div className="cart">
            
            {cart?.map((newItem, idx) => (
              <div className="itemBox" key={idx}>
                
                <div key={newItem.title}> {newItem.title}</div>
                <div key={newItem.counter}> {newItem.counter}</div>
              </div>
            ))}
          </div>
        )}
        </>
    )
    };
export default ItemCart;