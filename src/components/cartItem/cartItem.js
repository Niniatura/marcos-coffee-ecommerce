import {ItemCount} from '../itemCount/ItemCount.js';
import { useContext , useState } from "react";
import {CartContext, CartProvider} from '../contexts/cartContext/cartContext.js';

export const CartItem = ({ item}) => {
    const cart = useContext(CartContext);
    return(
        <>
            <div>
                <p>{cart.name}</p>
                <p>{cart.title}</p>
            </div>
        </>
    )
}
export default CartItem;