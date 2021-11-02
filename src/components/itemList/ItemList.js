import {Item} from "../Item/item.js";
import data from "../productJson/ProductJSON.js";

export function ItemList ({products}) {
   return(
       <>
        {data.map((item) => (
            <Item {...item} />
        ))}
    </>
   )
}

export default ItemList;
