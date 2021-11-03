import {Item} from "../Item/item.js";
import data from "../productJson/ProductJSON.js";

export function ItemList () {
   return(
       <>
        {data.map((item) => (
            <Item key={item.id} {...item} />
        ))}
    </>
   )
}

export default ItemList;
