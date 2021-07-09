import {useCartContext} from '../../contexts/CartContext';
import Rating from '../Rating';
import './style.css';

const Item = ({item}) => {
    const {addItem} = useCartContext();

    const handleClick = () => {
        addItem(item);
    }
    
    return (
        <article className="item">
            <img src={item.imageUrl}/>
            <div className="item-info">
                <h4>ZAPATO FLOTADOR NEGRO</h4>
                <Rating starsChecked={item.stars}/>
                <p className="item-price-sec">de $ 399.00n</p>
                <p className="item-price">por $259.90</p>
                <p className="item-price-sec">ou em 9x de R$ 28,87</p>
            </div>
            <button onClick={handleClick}>Comprar</button>
            {item.listPrice && <>
                <div className="badge"></div>
                <span className="badge-text">OFF</span>
            </>}
        </article>
    )
}

export default Item;