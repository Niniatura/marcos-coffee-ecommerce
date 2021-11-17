import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

//export const useCart = () => useContext(CartContext);
//const INITIAL_STATE = {addedItems:[{name:'pepe', quantity: 1}], price:0}

export function CartProvider ({children}){
    const[cart,setCart] = useState([]);
    
      
    const addItem = (item, quantity) => {
        const product = {
            name: item.title,
            quantity: quantity,
            id: item.id,
            };
        
        setCart([ ...cart, product ]);
        console.log(cart);
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
