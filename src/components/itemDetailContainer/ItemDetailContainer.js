import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {ItemDetail} from "../itemDetail/ItemDetail.js";
import data from "../productJson/ProductJSON.js";
import "../itemDetail/itemDetail.css";


export function ItemDetailContainer() {
    const [product,setProduct]=useState([]);
    const {id} = useParams();
   

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(
            () => resolve(data.filter((item) => item.id === id)),
            0
          );
        }).then((data) => setProduct(data[0]));
      }, [id]);
    
      return <ItemDetail className="itemDetailContainer" {...product} />;
    }
    

export default ItemDetailContainer;