import {useCartContext} from '../../contexts/CartContext';
import './style.css';

const CartWidget = () => {
    const {size} = useCartContext();
    
    return (
        <>
         <img className="cart-icon" src="./icons/shopping-cart.svg" alt="icon-cart"/>  
         {size > 0 && <span className="cart-circle">{size}</span>} 
        </>
    )
}

export default CartWidget;
