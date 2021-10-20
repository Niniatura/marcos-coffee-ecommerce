import React from "react";
import './ItemCount.css';

export const Counter = ({counter, onDecrease, onAdd}) => {
    return (
        <div className="contador">
            <button className="btn bg-dark boton" onClick ={onDecrease}>-</button>
            <p className="items">{counter}</p>
            <button className="btn bg-dark boton" onClick ={onAdd}>+</button>
        </div>
    );
};

