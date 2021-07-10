import {useCartContext} from '../../contexts/CartContext';
import { addDivToString } from '../../utils/addDivToString';
import Rating from '../Rating';
import './style.css';

const Item = ({item}) => {

    const {addItem} = useCartContext();

    const handleClick = () => {
        addItem(item);
    }
    
    return (
        <article className="item">
            <img src={item.imageUrl} alt="product-image"/>
            <div className="item-info">
                <h4>{item.productName}</h4>
                <Rating starsChecked={item.stars}/>
                <p className="item-price-sec list-price">de ${addDivToString(item.listPrice || 40000)}</p>
                <p className="item-price">${addDivToString(item.price)}</p>
                {item.installments.length > 0 && <p className="item-price-sec">ou em {item.installments[0].quantity}x de R${addDivToString(item.installments[0].value)}</p>}
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