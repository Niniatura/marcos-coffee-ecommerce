import './ItemCount.css';


export const ItemCount = ({ setCounter, counter, stock}) => {
    
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

      const onAdd = () => {
        console.log('cantidad agregada '+ counter)
    }

    return (
        <>
        <div className="contador">
            <button className="btn btn-outline-dark" onClick ={onDecrese}>-</button>
            <p className="items">{counter}</p>
            <button className="btn btn-outline-dark" onClick ={onIncrement}>+</button>        
        </div>
            <button className="addButton btn bg-dark btn-primary" onClick ={onAdd}><span className="add">Agregar al carrito</span></button>
       </>
    )
}
export default ItemCount;