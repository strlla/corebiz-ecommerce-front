import {CartProvider} from './contexts/CartContext';
import ItemListContainer from './containers/ItemListContainer';
import FormContainer from './containers/FormContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Navbar/>
      <ItemListContainer/>
      <FormContainer/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
