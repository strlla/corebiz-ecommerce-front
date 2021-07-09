import React, {useContext, useState, useEffect} from 'react'

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('cart')){
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => {
        if(itemInCart(item.productId)){
            const newCart = [...cart];
            newCart.forEach(cartItem => {
                if(cartItem.productId === item.productId){
                    cartItem.quantity++;
                }
            })   
            console.log(newCart);
            setCart(newCart);     
        } else {
            setCart([...cart, {...item, quantity: 1}]);
        }
    }

    const itemInCart = (itemId) => cart.some(item => item.productId === itemId);

    const getSize = () => cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{addItem, size: getSize()}}>
            {children}
        </CartContext.Provider>
    )
}
