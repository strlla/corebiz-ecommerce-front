import './style.css';

const Item = ({item}) => {
    return <article className="item">
        <img src={item.imageUrl}/>
        <div className="item-info">
            <h4>ZAPATO FLOTADOR NEGRO</h4>
            <p className="item-price-sec">de $ 399.00n</p>
            <p className="item-price">por $259.90</p>
            <p className="item-price-sec">ou em 9x de R$ 28,87</p>
        </div>
        <button>Comprar</button>
    </article>
}

export default Item;