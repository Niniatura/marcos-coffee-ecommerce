import {useState,useEffect} from 'react';
import { useParams} from "react-router-dom";
import data from "../productJson/ProductJSON.js";

export const ItemDetail =(props) =>{
    return(
        <>
        <div className="card">
            <h5>{props.title}</h5>
            <img src={props.picture} className="brand-logo" alt="logo" />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.price}</p>
                <p className="card-text">Stock:{props.stock}</p>   
            </div>
        </div>
        </>
    )
}
export default ItemDetail;