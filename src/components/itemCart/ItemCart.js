import { useState, useContext} from "react";
import {CartContext} from '../contexts/cartContext/cartContext.js';

export function ItemCart () {
    const item = useContext(CartContext);
    
    return(
        <>
       
            <div>
                <p>{item.id}</p>
                <p>{item.name}</p>
            </div>
       
        </>
    )
    };

export default ItemCart;
