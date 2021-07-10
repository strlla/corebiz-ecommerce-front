import {CartProvider} from './contexts/CartContext';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
    <CartProvider>
      <Navbar/>
      <ItemListContainer/>
      <FormContainer/>
    </CartProvider>
  );
}

export default App;
