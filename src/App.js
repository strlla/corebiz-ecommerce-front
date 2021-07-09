import {CartProvider} from './contexts/CartContext';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <CartProvider>
      <Navbar/>
      <ItemListContainer/>
    </CartProvider>
  );
}

export default App;
