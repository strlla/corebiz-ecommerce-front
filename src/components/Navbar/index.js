import Search from '../Search';
import CartWidget from '../CartWidget';
import './style.css';

const Navbar = () => {
    return (
        <header class="header">
            <div class="sidebar-container">
                <img src="./icons/hamburger-menu.svg"/>
            </div>
            <div class="logo-container">
                <h2>corebiz<span>.</span></h2>
            </div>
            <div class="search-container">
                <Search/>
            </div>
            <div class="user-container">
                <img src="./icons/user.svg"/>
                <p>Mi cuenta</p>
            </div>
            <div class="cart-container">
                <CartWidget/>
            </div>

        </header>
    )
}

export default Navbar
