import Search from '../Search';
import CartWidget from '../CartWidget';
import './style.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="sidebar-container">
                <img src="./icons/hamburger-menu.svg" alt="icon-menu"/>
            </div>
            <div className="logo-container">
                <h2>corebiz<span>.</span></h2>
            </div>
            <div className="search-container">
                <Search/>
            </div>
            <div className="user-container">
                <img src="./icons/user.svg" alt="icon-user"/>
                <p>Mi cuenta</p>
            </div>
            <div className="cart-container">
                <CartWidget/>
            </div>

        </header>
    )
}

export default Navbar
