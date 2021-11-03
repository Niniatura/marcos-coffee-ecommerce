import { useState,useEffect } from "react";
import ItemList from "../itemList/ItemList.js";
import data from "../productJson/ProductJSON.js";
import "./ItemListContainer.css";   

export function ItemListContainer(){
    const [products,setProducts]=useState(null);

   useEffect(()=>{
    const productList = new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve((data));
        }, 2000);
        });
    
    productList.then(
        (result) => {
            
            setProducts(data);
            
        },
        (err) =>{
            console.log("Error:" + err);
        }
    )
    },[]);
    return(
        <div className="Items">
        <ItemList />
     </div  >
    )
}
    

export default ItemListContainer;