import './style.css';
import ItemList from '../../components/ItemList';

const ItemListContainer = () => {
    return (
        <main>
            <ItemList title="Más Vendidos" items={[]}/>
        </main> 
    )   
}

export default ItemListContainer;