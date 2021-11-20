import { useState, createContext, useContext } from "react";
import data from "../../productJson/ProductJSON";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);
const INITIAL_STATE = {
    addedItems: [{ item: data,  counter: 1 }],
    totalPrice: 0
  };

export function CartProvider ({children}){
    const[cart,setCart] = useState(INITIAL_STATE);
    const addItem = (item, counter) => {
        if (cart.addedItems.some((item) => data.id=== item.id)) {
            console.log('se agrego un producto culo'+item.id + 'cantidad'+ counter)
            //console.log(item)
          return;
        }
    
        const newAddedItems = cart.addedItems.map((product) => {
          if (product.data === data.id) return { ...product, quantity: 2 };
            console.log({data})
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
