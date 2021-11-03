import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {ItemDetail} from "../itemDetail/ItemDetail.js";
import data from "../productJson/ProductJSON.js";


export function ItemDetailContainer() {
    const [product,setProduct]=useState([]);
    const {id} = useParams();
    const [counter, setCounter] = useState();

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(
            () => resolve(data.filter((item) => item.id === id)),
            0
          );
        }).then((data) => setProduct(data[0]));
      }, []);
    
      return <ItemDetail {...product} />;
    }
    

export default ItemDetailContainer;