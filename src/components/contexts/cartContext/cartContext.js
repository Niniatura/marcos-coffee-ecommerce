import { useState, createContext, useContext } from "react";
import data from "../../productJson/ProductJSON";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);
const INITIAL_STATE = {
    addedItems: [{ item: 'title',  quantity: 0  }],
    totalPrice: 0
  };

export function CartProvider ({children}){
    const[cart,setCart] = useState(INITIAL_STATE);
    const addItem = (product, counter) => {
        if (cart.addedItems.some((addedItem) => product.id=== product.id)) {
            console.log('se agrego un producto culo'+product.title+ 'cantidad'+ counter)
            console.log(INITIAL_STATE)
          return;
        }
        
        const newAddedItems = cart.addedItems.map((addedItems) => {
          if (product.id === data.id) return { ...addedItems, quantity: counter };
            //console.log({product})
          return product;
        });
        
      };
    const removeItem =(item) =>{
        // remover item
    }
    return(
        <CartContext.Provider
        value ={{ cart, addItem}}>
            {children}
        </CartContext.Provider >
    );
};