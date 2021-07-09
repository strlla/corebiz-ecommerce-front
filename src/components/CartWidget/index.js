import './style.css';

const CartWidget = () => {
    return (
        <>
         <img className="cart-icon" src="./icons/shopping-cart.svg" alt="icon-cart"/>  
         <span className="cart-circle">0</span> 
        </>
    )
}

export default CartWidget;
