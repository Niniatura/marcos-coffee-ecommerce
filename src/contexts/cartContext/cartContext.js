import { useState, createContext, useContext } from "react";
import data from "../../components/productJson/ProductJSON";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  newItem: [{ id: 'id',  counter: 0  }],
  totalPrice: 0
}; 

export const CartProvider = ({children})=>{
  const[cart,setCart] = useState([]);
  const addItem = (product, counter) => {
  const isInCart = cart.some((item) => item.id === product.id);
  if (product.stock >= 0) {
    if (!isInCart) {
      const newItem = {
        ...product,
        counter: counter,
      };
      //console.log(newItem)

      setCart([...cart, newItem]);
      
    } else {
      const foundedItem = cart.find(
        (item) => item.id === product.id
      );
      foundedItem.counter = foundedItem.counter + counter;
      foundedItem.stock = foundedItem.stock - counter;
      setCart([...cart]);
    }
};
};
      
  return(
      <CartContext.Provider
      value ={{ cart, setCart, addItem}}>
          {children}
      </CartContext.Provider >
  ); 

};