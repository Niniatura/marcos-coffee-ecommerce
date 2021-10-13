import cart from '../images/shopping_cart_solid.svg';

export const CartWidget = () => {
    return(
        <div className="cart">
            <img src={cart} alt="shopping_cart" className = 'shopping_cart'/>
            <p className='item_cant'>4</p>
        </div>
        )
}