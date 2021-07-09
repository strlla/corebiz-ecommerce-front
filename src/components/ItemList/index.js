import './style.css';
import Item from '../Item';

const ItemList = ({items, title}) => {
    return <section className="item-list">
        <div className="list-header">
            <h3>{title}</h3>
            <hr/>
        </div>
        <div className="list-container">
            <Item item={{imageUrl: "https://corebiz-test.herokuapp.com/images/product-1.png"}}/>
        </div>    
    </section>
}

export default ItemList