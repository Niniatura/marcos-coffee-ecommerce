import { useContext} from "react";
import { CartContext } from "../../contexts/cartContext/cartContext.js";

function ItemCart ({product}) {
    
        const object = useContext(CartContext);
    return(
        <>
       
       <article key={object.id} className='cartDetail-card'>
       <h2 className='info-title ms-3'>{object.title}</h2>
       </article>
       
        </>
    )
    };

export default ItemCart;
