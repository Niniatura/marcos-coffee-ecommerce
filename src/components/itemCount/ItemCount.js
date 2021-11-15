import './ItemCount.css';

export const ItemCount = ({ setCounter, counter, stock, setVisible, onAdd}) => {
  
  
    const onDecrese = () => {
        if (counter > 1) { 
          setCounter(counter - 1)
        }
      }

      const onIncrement = () => {
        if (counter < stock) {
          setCounter(counter + 1)
        }
      }
      
     
      
      
    
    return (
        <>
        <div >
          <div className="contador"> 
              <button className="btn btn-outline-dark" onClick ={onDecrese}>-</button>
              <p className="items">{counter}</p>
              <button className="btn btn-outline-dark" onClick ={onIncrement}>+</button>
                    
          </div>
          <div>
              <button className="addButton btn bg-dark btn-primary"><span className="add" onClick={onAdd} >Agregar al carrito</span></button>
          </div>
        </div>
       </>
    )
}
export default ItemCount;