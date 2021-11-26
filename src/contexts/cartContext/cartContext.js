import { useState, createContext, useContext } from "react";
import data from "../../components/productJson/ProductJSON";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);
const INITIAL_STATE = {
    addedItems: [{ name: 'title',  quantity: 0  }],
    totalPrice: 0
  };
  

export const CartProvider = ({children})=>{
    const[cart,setCart] = useState([]);
    const addItem = (product, counter) => {
		const isInCart = cart.some((addedItems) => product.id === data.id);
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
          (product) => product.id === data.id
          );
          foundedItem.counter = foundedItem.counter + counter;
          foundedItem.stock = foundedItem.stock - counter;
          setCart([...cart]);
        }
      }
	};

        
        /* const newAddedItems = cart.addedItems.map((addedItems) => {
          if (product.id === data.id) return { ...addedItems, quantity: counter };
            //console.log({product})
          return product;
        });
         */
      
    const removeItem =(item) =>{
        // remover item
    }
    return(
        <CartContext.Provider
        value ={{ cart, setCart, addItem}}>
            {children}
        </CartContext.Provider >
    ); 
};