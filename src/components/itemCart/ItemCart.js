import { useContext} from "react";
import { CartContext } from "../../contexts/cartContext/cartContext.js";

function ItemCart () {
    
        const {cart} = useContext(CartContext);
    return(
        <>
       
       {cart.length > 0 && (
          <div className="cart">
            
            {cart?.map((addedItems) => (
              <div className="itemBox">
                
                <div> {addedItems.title}</div>
                <div> {addedItems.counter}</div>
              </div>
            ))}
          </div>
        )}
        </>
    )
    };

export default ItemCart;
