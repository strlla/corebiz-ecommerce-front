import Rating from '../Rating';
import './style.css';

const Item = ({item}) => {
    return (
        <article className="item">
            <img src={item.imageUrl}/>
            <div className="item-info">
                <h4>ZAPATO FLOTADOR NEGRO</h4>
                <Rating starsChecked={2}/>
                <p className="item-price-sec">de $ 399.00n</p>
                <p className="item-price">por $259.90</p>
                <p className="item-price-sec">ou em 9x de R$ 28,87</p>
            </div>
            <button>Comprar</button>
            {item.listPrice && <>
                <div className="badge"></div>
                <span className="badge-text">OFF</span>
            </>}
        </article>
    )
}

export default Item;