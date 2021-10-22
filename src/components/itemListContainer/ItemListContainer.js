import { useState } from "react";
import ItemCount from "../itemCount/ItemCount.js";

export const ItemList= () =>{
    
    const onAdd = (counter) => {
        console.log('cantidad agregada '+ counter)
    }
    return(
        <div>
            <ItemCount stock= '5' initial='1' />
            <button onClick ={onAdd}>Agregar al carrito</button>
        </div>
        )
}

export default ItemList;
