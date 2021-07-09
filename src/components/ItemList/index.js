import './style.css';
import Item from '../Item';

const ItemList = ({items, title}) => {
    return (
        <section className="item-list">
            <div className="list-header">
                <h3>{title}</h3>
                <hr/>
            </div>
            <div className="list-container">
                {items.length > 0 ? items.map(item => <Item key={item.productId} item={item}/>) : <span>Cargando...</span>}
            </div>    
        </section>
    )
}

export default ItemList