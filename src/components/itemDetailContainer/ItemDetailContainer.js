import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {ItemDetail} from "../itemDetail/ItemDetail.js";
import data from "../productJson/ProductJSON.js";


export function ItemDetailContainer() {
    const[items,setItems]=useState([]);
    const { id} = useParams();
    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(
            () => resolve(data.filter((product) => product.id === id)),
            0
          );
        }).then((data) => setItems(data[0]));
      }, []);
    console.log(data);
    return(
        <>
        
            <ItemDetail  {...items}/>
       
        </>
    );
}
export default ItemDetailContainer;