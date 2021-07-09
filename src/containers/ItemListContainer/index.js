import ItemList from '../../components/ItemList';
import {getProducts} from '../../utils/fetchProducts';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const products = await getProducts(); 

        setItems(products);
    }, [])


    return (
        <main>
            <ItemList title="Más Vendidos" items={items}/>
        </main> 
    )   
}

export default ItemListContainer;