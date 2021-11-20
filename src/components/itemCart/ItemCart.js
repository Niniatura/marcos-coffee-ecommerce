import { useState, useContext} from "react";
import {CartContext} from '../contexts/cartContext/cartContext.js';

export function ItemCart ({addedItems}) {
    const item = useContext(CartContext);
    console.log(addedItems)
    console.log(item)
    return(
        <>
       
            <div>
                
                <p>hola</p>
            </div>
       
        </>
    )
    };

export default ItemCart;
